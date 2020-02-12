const Game = require('../models/Game');

module.exports = {
  async index(request, response) {
    const games = await Game.find();

    return response.json(games);
  },

  async store(request, response) {
    const { } = request.body;

    game = await Game.create({

    });

    return response.json(game);
  },

  async update(request, response) {
    const { } = request.query;

    const updateInfo = await Game.update(
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
    const { } = request.query;

    const deleteInfo = await Game.deleteOne({

    });

    return response.json(deleteInfo);
  }
}
