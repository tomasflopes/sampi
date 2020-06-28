const Game = require('../models/Game');
const User = require('../models/User');

const { GetUserGroup, DecodeJWTToken } = require('../utils');

module.exports = {
  async index(request, response) {
    const userId = await DecodeJWTToken(request);

    const userGroup = await GetUserGroup(userId);

    if (!userGroup[0]) return response.status(400).json({ Message: 'User has no group' });

    const lastGame = await getLastNotFinishedGameFromUser(userId);

    return response.status(200).json(lastGame);
  },

  async store(request, response) {
    const { teamA, teamB, date, location } = request.body;

    const teamAIds = teamA.map(player => player._id);
    const teamBIds = teamB.map(player => player._id);

    const playersArray = [...teamAIds, ...teamBIds];
    const group = await GetUserGroup(playersArray);

    if (!group) return response.status(400).json({ Message: 'Not all players are from the same group' });

    console.log('all same group', date, location);

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

    return response.status(202).json(updateInfo);
  },

  async getGames(request, response) {
    const userId = await DecodeJWTToken(request);

    const games = await Game
      .find()
      .sort({ _id: -1 });

    const [userGroup] = await GetUserGroup(userId);

    if (!userGroup) return response.status(400).json({ Message: 'User has no group' });

    const userGames = games.filter(game => game.idGroup.equals(userGroup._id));

    const openGames = userGames.filter(game => typeof (game.result) !== 'undefined');

    const gameInfo = openGames.map(game => {
      const userTeam = game.teamA.includes(userId) ? 'a' : 'b';

      const results = game.result.split('-');

      if (results[0] === results[1]) {
        return 'T';
      }

      const teamAResult = parseInt(results[0]);
      const teamBResult = parseInt(results[1]);

      const teamAWins = teamAResult > teamBResult ? true : false;

      if (userTeam === 'a' && teamAWins) return 'W';

      if (userTeam === 'b' && !teamAWins) return 'W';

      return 'L';
    });

    const gameValues = openGames.map((object, index) => {
      const gameResult = gameInfo[index];
      return { ...object._doc, gameResult };
    })

    return response.status(200).json(gameValues);
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
