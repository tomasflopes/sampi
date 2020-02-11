const Player = require('../models/Player');

module.exports = {
  async index(request, response) {
    const players = await Player.find();

    return response.json(players);
  },

  async store(request, response) {
    const { name, avatar_url, sex, birth, email, phone, position } = request.body;

    let player = await Player.findOne({ name });

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
    }

    return response.json(player);
  },

  async update(request, response) {
    const { name } = request.query;

    const updateInfo = await Player.update(
      { name },
      {
        $set: {
          //TODO Loop trough the request.body object and update every field
        }
      },
    );

    return response.json(updateInfo);
  },

  async destroy(request, response) {
    const { name } = request.query;

    const deletedPlayer = await Player.deleteOne({
      name,
    });

    return response.json(deletedPlayer);
  }
}
