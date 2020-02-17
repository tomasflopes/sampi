const Group = require('../models/Group');

module.exports = {
  async index(request, response) {
    const groups = await Group.find();

    return response.json(groups);
  },

  async store(request, response) {
    const { players } = request.body;

    group = await Group.create({
      players
    });

    return response.json(group);
  },

  async update(request, response) {
    const { identifier } = request.query;
    const { name } = request.body;

    const playersArray = (await Group.findById(identifier)).players;

    const existingPlayer = playersArray.filter(player => player === name);

    if (!existingPlayer) {
      const updateInfo = await Group.updateOne({
        _id: identifier
      }, {
        $push: {
          players: name,
        }
      });
    } else {
      const updateInfo = 
    }

    return response.json(updateInfo);
  },

  async destroy(request, response) {
    const { name } = request.query;

    const deleteInfo = await Player.deleteOne({
      name,
    });

    return response.json(deleteInfo);
  }
}
