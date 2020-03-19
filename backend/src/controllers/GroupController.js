const Group = require('../models/Group');

module.exports = {
  async index(request, response) {
    const groups = await Group.find();

    return response.status(200).json(groups);
  },

  async store(request, response) {
    const { players } = request.body;

    const group = await Group.create({
      players
    });

    return response.status(201).json(group);
  },

  async update(request, response) {
    const { id } = request.params;
    const { _id } = request.body;

    const playersArray = (await Group.findById(id)).players;

    const existsPlayer = playersArray.filter(player => player == _id);

    if (existsPlayer[0]) return response.status(400).json({ Error: 'Duplicate Player' });

    const updateInfo = await Group.updateOne({
      _id: id
    }, {
      $push: {
        players: _id,
      }
    });

    return response.status(200).json(updateInfo);
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleteInfo = await Group.deleteOne({
      _id: id
    });

    return response.status(202).json(deleteInfo);
  }
}
