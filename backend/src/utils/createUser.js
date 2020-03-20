const faker = require('faker');

const User = require('../models/User');

const bckrypt = require('bcryptjs');

module.exports = {
  async createUser(specs = {}) {
    const password_hash = generatePassword(specs.password);

    return await User.create({
      name: specs.name || faker.name.findName(),
      email: specs.email || faker.internet.email(),
      password_hash: password_hash || faker.hacker.adjective(),
      avatar_url: specs.avatar_url || faker.internet.avatar(),
      sex: "Male",
      birth: specs.birth || faker.date.past(),
      phone: specs.phone || faker.phone.phoneNumber(),
    });
  }
}

const generatePassword = (password) => {
  if (password) {
    return password_hash = bckrypt.hashSync(password, 10);
  }
}
