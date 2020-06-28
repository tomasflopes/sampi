const faker = require('faker');

const Group = require('../../src/models/Group');

module.exports = createGroup = async ({ players }) => {
  return await Group.create({
    name: faker.hacker.adjective(),
    players,
  });
};
