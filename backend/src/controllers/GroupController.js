const Group = require('../models/Group');

module.exports = {
  async index(request, response) {
    const groups = await Group.find();

    return response.status(200).json(groups);
  },

  async store(request, response) {
    const { players } = request.body;

    group = await Group.create({
      players
    });

    return response.status(201).json(group);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const playersArray = (await Group.findById(id)).players;

    const existingPlayer = playersArray.filter(player => player === name);

    let updateInfo;

    if (existingPlayer.length === 0) {
      updateInfo = await Group.updateOne({
        _id: id
      }, {
        $push: {
          players: name,
        }
      });

      return response.status(200).json(updateInfo);
    }

    return response.status(400).json({ Error: 'Duplicate Player' });
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleteInfo = await Group.deleteOne({
      _id: id
    });

    return response.status(202).json(deleteInfo);
  }
}
