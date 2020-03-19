const faker = require('faker');

const User = require('../models/User');

module.exports = {
  async createUser() {
    await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password_hash: faker.hacker.adjective(),
      avatar_url: faker.internet.avatar(),
      sex: "Male",
      birth: faker.date.past(),
      phone: faker.phone.phoneNumber(),
    });
  }
}
