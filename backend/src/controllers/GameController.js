const Game = require('../models/Game');

module.exports = {
  async index(request, response) {
    const games = await Game.find();

    return response.json(games);
  },

  async store(request, response) {
    const { playersArray, date, location } = request.body;

    const playersIds = playersArray.map(player => Player.findOne(player.name)._id);

    const game = await Game.create({
      players: playersIds,
      date,
      location
    });

    return response.json(game);
  },

  async update(request, response) {
    const { _id } = request.query;
    const { mvp, result } = request.body;

    const updateInfo = await Game.update(
      { _id },
      {
        $set: {
          mvp,
          result
        }
      },
    );

    return response.json(updateInfo);
  },

  async destroy(request, response) {
    const { _id } = request.query;

    const deleteInfo = await Game.deleteOne({
      _id
    });

    return response.json(deleteInfo);
  }
}
