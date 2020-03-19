const User = require('../models/User');

const { registerValidation } = require('../utils/validation');

const bckrypt = require('bcryptjs');

module.exports = {
  async index(request, response) {
    const userArray = await User.find();

    return response.status(200).send(userArray);
  },

  async store(request, response) {
    const { name, email, password, avatar_url, sex, birth, phone, } = request.body;

    const error = await userVerification(request.body);

    if (error) return response.status(400).json(error);

    const password_hash = bckrypt.hashSync(password, 8);

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

  async login(request, response) { //TODO: Ver como isto se faz

  }
}

const userVerification = async (body) => {
  const { email, name } = body;

  const { error } = registerValidation(body);

  if (error) return error;

  const emailExists = await User.findOne({ email });
  if (emailExists) return { Message: 'Email already exists' };

  const nameExists = await User.findOne({ name });
  if (nameExists) return { Message: 'Name already exists' };
}
