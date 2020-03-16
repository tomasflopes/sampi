const User = require('../models/User');

const { registerValidation } = require('../utils/validation');

module.exports = {
  async index(request, response) {

  },

  async store(request, response) {
    const { email, password } = request.body;

    const { error } = registerValidation(request.body);

    if (!error) {
      const emailExists = User.findOne({ email });
      if (emailExists) return response.status(400).send({ Message: 'Email already exists' });

      //TODO: Encrypt password

      const createdUser = await User.create({
        email,
        password_hash
      });
    } else {
      return response.status(400).json(error);
    }

    return response.status(201).json(createdUser);
  },

  async update(request, response) {

  },

  async delete(request, response) {

  }
}
