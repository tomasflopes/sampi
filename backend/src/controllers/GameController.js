const Game = require('../models/Game');
const { GetUserGroup } = require('../utils');

module.exports = {
  async index(request, response) {
    const games = await Game.find();

    return response.status(200).json(games);
  },

  async store(request, response) {
    const { playersArray, date, location } = request.body;

    const group = await GetUserGroup(playersArray);

    if (!group) return response.status(400).json({ Message: 'Not all players are from the same group' });

    await Game
      .create({
        players: playersArray,
        idGroup: group._id,
        date: date,
        location: location || "Not specified"
      })
      .then(game => response.status(201).json(game))
      .catch(error => response.status(400).json(error));
  },

  async update(request, response) {
    const { id } = request.params;
    const { mvp, result } = request.body;

    const updateInfo = await Game.updateOne({
      _id: id
    }, {
      $set: {
        mvp,
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


