const User = require('../models/User');
const Game = require('../models/Game');

const { GetUserGroup, DecodeJWTToken } = require('../utils');
const GetUserGamesResults = require('../utils/GetUserGamesResults');

module.exports = {
  async index(request, response) {
    const userId = await DecodeJWTToken(request);

    const [group] = await GetUserGroup(userId);

    const games = await Game.find().sort({ _id: -1 });

    const groupPlayers = group.players;

    const groupLeaderBoard = groupPlayers.map(player => {
      const userGames = GetUserGamesResults(games, group, player);
      const userPoints = getUserPoints(userGames);

      return {
        player,
        userPoints,
      };
    });

    const orderedLeaderBoard = groupLeaderBoard.sort(
      (a, b) => b.userPoints - a.userPoints
    );

    const data = [];
    let i = 0;
    for (const player of orderedLeaderBoard) {
      i++;
      const userData = await User.findById(player.player);

      data.push({ player: userData, points: player.userPoints, position: i });
    }

    return response.json(data);
  },
};

function getUserPoints(games) {
  return games.reduce((accumulator, game) => {
    const userResult = game.gameResult;

    if (userResult === 'W') return accumulator + 3;
    if (userResult === 'T') return accumulator + 2;
    if (userResult === 'L') return accumulator + 1;
    if (userResult === 'NA') return accumulator + 0;
  }, 0);
}
