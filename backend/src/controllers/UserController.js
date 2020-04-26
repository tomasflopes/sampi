const User = require('../models/User');

const { registerValidation, loginValidation, editValidation } = require('../middleWares/UserDataValidation');

const bckrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const aws = require('aws-sdk');
const s3 = new aws.S3();

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

module.exports = {
  async index(request, response) {
    const userArray = await User.find();

    return response.status(200).send(userArray);
  },

  async store(request, response) {
    const { name, email, password, gender, birth, phone, position } = request.body;

    const avatar_url = 'https://upload-sampi.s3.amazonaws.com/2020-04-26-5c99-default-user.jpeg'

    const error = await userVerification(request.body);

    if (error) {
      await deleteUserPhoto(avatar_url);
      return response.status(400).json(error);
    }

    const salt = await bckrypt.genSaltSync(10);
    const password_hash = await bckrypt.hashSync(password, salt);

    const createdUser = await User.create({
      name,
      email,
      password_hash,
      avatar_url,
      gender,
      birth,
      phone,
      position,
    });

    return response.status(201).json(createdUser);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, phone } = request.body;

    const { location, filename } = request.file || { location: undefined, filename: undefined };

    if (!(location == undefined && filename == undefined)) {
      const avatar_url = location || `${process.env.APP_URL}/files/${filename}`;

      const oldUser = await User.findById({ _id: id });

      const { error } = await editValidation(request.body);

      if (error) {
        await deleteUserPhoto(avatar_url);
        return response.status(400).json(error);
      }

      if (avatar_url) {
        await deleteUserPhoto(oldUser.avatar_url);
      }

      const updatedUser = await User.findByIdAndUpdate({
        _id: id
      }, {
        name: name || oldUser.name,
        avatar_url: avatar_url || oldUser.avatar_url,
        phone: phone || oldUser.phone,
      });

      return response.status(200).json(updatedUser);
    } else {
      const oldUser = await User.findById({ _id: id });

      const { error } = await editValidation(request.body);

      if (error) return response.status(400).json(error);

      const updatedUser = await User.findByIdAndUpdate({
        _id: id
      }, {
        name: name || oldUser.name,
        avatar_url: oldUser.avatar_url,
        phone: phone || oldUser.phone,
      });
      return response.status(200).json(updatedUser);
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    const deleteInfo = await User.findByIdAndDelete({ _id: id });

    const { avatar_url } = deleteInfo;

    deleteUserPhoto(avatar_url);

    response.status(202).json(deleteInfo);
  },

  async login(request, response) {
    const { email, password } = request.body;

    const { error } = await loginValidation(request.body);

    if (error) return response.status(400).json(error);

    const user = await User.findOne({ email });
    if (!user) return response.status(400).json({ message: 'Email is wrong' });

    const validPassword = await bckrypt.compareSync(password, user.password_hash);
    if (!validPassword) return response.status(400).json({ message: 'Password is wrong' });

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    response.status(200).json({
      user,
      token
    });
  }
}

const userVerification = async (body) => {
  const { email, name } = body;

  const { error } = registerValidation(body);

  if (error) return error;

  const emailExists = await User.findOne({ email });
  if (emailExists) return { message: 'Email already exists' };

  const nameExists = await User.findOne({ name });
  if (nameExists) return { message: 'Name already exists' };
}

async function deleteUserPhoto(avatar_url) {
  if (avatar_url) {
    if (process.env.STORAGE_TYPE === 's3') {
      const [, , , key] = avatar_url.split('/');

      await s3.deleteObject({
        Bucket: 'upload-sampi',
        Key: key,
      }).promise().finally();
    } else {
      const [, , , , key] = avatar_url.split('/');

      promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'temp', 'uploads', key))
    }
  }
}
