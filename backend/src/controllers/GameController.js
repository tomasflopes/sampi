const Game = require('../models/Game');
const { GetUserGroup, DecodeJWTToken } = require('../utils');

module.exports = {
  async index(request, response) {
    const userId = await DecodeJWTToken(request);

    const lastGame = await getLastNotFinishedGameFromUser(userId);

    return response.status(200).json(lastGame);
  },

  async store(request, response) {
    const { teamA, teamB, date, location } = request.body;

    const playersArray = [...teamA, ...teamB];
    const group = await GetUserGroup(playersArray);

    if (!group) return response.status(400).json({ Message: 'Not all players are from the same group' });

    await Game
      .create({
        teamA,
        teamB,
        idGroup: group._id,
        date: date,
        location: location || "Not specified"
      })
      .then(game => response.status(201).json(game))
      .catch(error => response.status(400).json(error));
  },

  async update(request, response) {
    const { mvp, result } = request.body;

    const userId = await DecodeJWTToken(request);
    const { _id } = await getLastNotFinishedGameFromUser(userId);

    const updateInfo = await Game.updateOne({
      _id
    }, {
      $set: {
        mvp,
        result
      }
    });

    return response.json(updateInfo);
  }
}

async function getLastNotFinishedGameFromUser(userId) {
  const games = await Game
    .find()
    .sort({ _id: -1 });

  const [userGroup] = await GetUserGroup(userId);

  const userGames = games.filter(game => game.idGroup.equals(userGroup._id));

  const [lastGame] = userGames.filter(game => typeof (game.result) === 'undefined');

  return lastGame;
}
