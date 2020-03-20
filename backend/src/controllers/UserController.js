const User = require('../models/User');

const { registerValidation, loginValidation } = require('../middleWares/UserDataValidation');

const bckrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {
  async index(request, response) {
    const userArray = await User.find();

    return response.status(200).send(userArray);
  },

  async store(request, response) {
    const { name, email, password, avatar_url, sex, birth, phone, } = request.body;

    const error = await userVerification(request.body);

    if (error) return response.status(400).json(error);

    const salt = await bckrypt.genSaltSync(10);
    const password_hash = await bckrypt.hashSync(password, salt);

    const createdUser = await User.create({
      name,
      email,
      password_hash,
      avatar_url,
      sex,
      birth,
      phone
    });

    return response.status(201).json(createdUser);
  },

  async update(request, response) {
    const { _id } = request.params;
    const { name, avatar_url, phone } = request.body;

    const oldUser = User.findById({ _id });

    const error = userVerification(request.body);

    if (error) return response.status(400).json(error);

    const newUser = await User.findByIdAndUpdate({
      _id
    }, {
      name: name || oldUser.name,
      avatar_url: avatar_url || oldUser.avatar_url,
      phone: phone || oldUser.phone,
    });

    return response.status(200).json(newUser);
  },

  async delete(request, response) {
    const { _id } = request.body;

    const deleteInfo = await User.findByIdAndDelete({ _id });

    response.status(202).json(deleteInfo);
  },

  async login(request, response) {
    const { email, password } = request.body;

    const { error } = loginValidation(request.body);

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
