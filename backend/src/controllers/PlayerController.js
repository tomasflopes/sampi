const Player = require('../models/Player');

module.exports = {
  async index(request, response) {
    const players = await Player.find();

    return response.json(players);
  },

  async store(request, response) {
    const { name, avatar_url, sex, birth, email, phone, position } = request.body;

    let player = await Player.findOne({
      name
    });

    if (!player) {
      player = await Player.create({
        name,
        avatar_url,
        sex,
        birth,
        email,
        phone,
        position
      });

      return response.status(201).json(player);
    }

    return response.status(400).json('User already exists');
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, avatar_url, sex, birth, email, phone, position } = request.body;

    const oldPlayer = await Player.findById(id);

    await Player.findByIdAndUpdate({
      _id: id
    }, {
      $set: {
        name: name || oldPlayer.name,
        avatar_url: avatar_url || oldPlayer.avatar_url,
        sex: sex || oldPlayer.sex,
        birth: birth || oldPlayer.birth,
        email: email || oldPlayer.email,
        phone: phone || oldPlayer.phone,
        position: position || oldPlayer.position
      }
    });

    const newPlayer = await Player.findById(id);

    return response.status(204).json(newPlayer);
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleteInfo = await Player.deleteOne({
      _id: id,
    });

    return response.status(202).json(deleteInfo);
  }
}
