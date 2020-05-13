const Group = require('../models/Group');
const { GetUserGroup, DecodeJWTToken } = require('../utils');

module.exports = {
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
