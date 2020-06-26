const Group = require('../models/Group');
const User = require('../models/User');

const faker = require('faker');

const { GetUserGroup, DecodeJWTToken } = require('../utils');

module.exports = {
  async index(request, response) {
    const id = await DecodeJWTToken(request);

    const group = await GetUserGroup(id);

    const players = group[0].players;

    const playerInfo = [];

    for (let i = 0; i < players.length; i++) {
      const { _id, name, email, phone, avatar_url } = await User.findById(players[i]);

      playerInfo.push({
        _id,
        name,
        email,
        phone,
        avatar_url
      });
    }

    const responseInfo = {
      id: group[0]._id,
      name: group[0].name,
      players: playerInfo
    }

    return response.status(200).json(responseInfo);
  },

  async store(request, response) {
    const player = await DecodeJWTToken(request);

    const name = await generateUniqueName();

    Group
      .create({
        name,
        players: player
      })
      .then(group => response.status(201).json(group))
      .catch(error => response.status(400).json(error));
  },

  async update(request, response) {
    const playerId = await DecodeJWTToken(request);
    const groupId = await GetUserGroup(playerId);

    if (!groupId[0]) return response.status(400).json({ Message: 'User has no group' });

    const { name } = request.body;

    const info = await Group.updateOne({
      _id: groupId
    }, {
      name
    });

    return response.status(200).send(info);
  },

  async destroy(request, response) {
    const userId = await DecodeJWTToken(request);

    const groupId = await GetUserGroup(userId);

    const deleteInfo = await Group.deleteOne({
      _id: groupId
    });

    return response.status(202).json(deleteInfo);
  },

  async removeUser(request, response) {
    const userId = await DecodeJWTToken(request);
    const groupId = await GetUserGroup(userId);

    await Group.updateOne({ _id: groupId }, {
      $pull: {
        players: userId,
      }
    })
      .catch(error => {
        return response.status(400).json(error);
      });

    return response.status(204).send();
  }
}

async function generateUniqueName() {
  const groups = await Group.find();

  if (groups.length === 0) return true;

  let unique = false;
  let name;

  while (!unique) {
    name = `${faker.hacker.noun()} ${faker.hacker.adjective()}`;

    groups.forEach(group => {
      unique = group.name === name ? false : true;
    });
  }

  return name;
}
