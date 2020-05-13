const { DecodeJWTToken } = require('../utils');
const Group = require('../models/Group');

module.exports = {
  async add(request, response) {
    const { groupId } = request.params;
    const newUserId = await DecodeJWTToken(request);

    const { players } = await Group.findById(groupId);

    const playerExists = players.filter(player => player == newUserId); //? Cannot be strict operator because it's Mongoose Id

    if (playerExists[0]) return response.status(400).json({
      Error: 'Duplicate Player'
    });

    await Group.updateOne({ _id: groupId }, {
      $push: {
        players: newUserId,
      }
    });

    return response.status(204).send();
  }
}
