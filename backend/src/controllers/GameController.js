const Game = require('../models/Game');

module.exports = {
  async index(request, response) {
    const games = await Game.find();

    return response.status(200).json(games);
  },

  async store(request, response) {
    const { playersArray, date, location } = request.body;

    const game = await Game.create({
      players: playersArray,
      date: date || "Not specified",
      location: location || "Not specified"
    });

    return response.status(201).json(game);
  },

  async update(request, response) {
    const { id } = request.params;
    const { mvp, result } = request.body;

    const updateInfo = await Game.updateOne({
      _id: id
    }, {
      $set: {
        mvp: mvp || "Not specified",
        result
      }
    },
    );

    return response.json(updateInfo);
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleteInfo = await Game.deleteOne({
      _id: id
    });

    return response.status(202).json(deleteInfo);
  }
}
