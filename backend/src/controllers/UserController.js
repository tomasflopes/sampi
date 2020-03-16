const User = require('../models/User');

const { registerValidation } = require('../utils/validation');

const bckrypt = require('bcryptjs');

module.exports = {
  async index(request, response) {
    const userArray = await User.find();

    return response.status(200).send(userArray);
  },

  async store(request, response) {
    const { email, password } = request.body;

    const { error } = registerValidation(request.body);

    if (error) return response.status(400).json(error);

    const emailExists = User.findOne({ email });
    if (emailExists) return response.status(400).send({ Message: 'Email already exists' });

    const password_hash = bckrypt.hashSync(password, 8);

    const createdUser = await User.create({
      email,
      password_hash
    });

    return response.status(201).json(createdUser);
  },

  async update(request, response) {

  },

  async delete(request, response) {

  }
}
