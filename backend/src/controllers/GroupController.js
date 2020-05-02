const Group = require('../models/Group');
const User = require('../models/User');

const { GetUserGroup, DecodeJWTToken } = require('../utils');

module.exports = {
  async index(request, response) {
    const id = await DecodeJWTToken(request);

    const group = await GetUserGroup(id);

    return response.status(200).json(group);
  },

  async store(request, response) {
    const { name, players } = request.body;

    await Group
      .create({
        name,
        players
      })
      .then(group => response.status(201).json(group))
      .catch(error => response.status(400).json(error));
  },

  async update(request, response) {
    const { id } = request.params;
    const { name = null, newPlayer: _id } = request.body;

    try {
      await User.countDocuments({ _id });
    }
    catch (error) {
      return response.status(400).json(error)
    }

    const oldGroup = await Group.findById(id);

    const oldName = oldGroup.name;
    const playersArray = oldGroup.players;

    const existsPlayer = playersArray.filter(player => player == _id); //? Cannot be strict operator because it's Mongoose Id

    if (existsPlayer[0]) return response.status(400).json({ Error: 'Duplicate Player' });

    if (!_id) {
      const updateInfo = await Group.updateOne({
        _id: id
      }, {
        name: name || oldName,
      });

      return response.status(200).json(updateInfo);
    }

    const updateInfo = await Group.updateOne({
      _id: id
    }, {
      name: name || oldName,
      $push: {
        players: _id,
      }
    });

    return response.status(200).json(updateInfo);
  },

  async destroy(request, response) {
    const userId = await DecodeJWTToken(request);

    const groupId = await GetUserGroup(userId);

    const deleteInfo = await Group.deleteOne({
      _id: groupId
    });

    return response.status(202).json(deleteInfo);
  }
}
