const User = require('../models/User');
const Game = require('../models/Game');

const {
  GetUserGroup,
  DecodeJWTToken,
  GetUserGamesResults,
} = require('../utils');

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

    const lastEventGroupLeaderBoard = groupPlayers.map(player => {
      const userGames = GetUserGamesResults(games, group, player);

      const lastEventGames = userGames.filter((game, index) => {
        if (index > 0) return game;
      });

      const userPoints = getUserPoints(lastEventGames);

      return {
        player,
        userPoints,
      };
    });

    const orderedLeaderBoard = await orderGroupLeaderBoard(groupLeaderBoard);
    const orderedLastEventLeaderBoard = await orderGroupLeaderBoard(
      lastEventGroupLeaderBoard
    );

    const completeData = getRelativePositionFromLeaderBoard(
      orderedLeaderBoard,
      orderedLastEventLeaderBoard
    );

    return response.json(completeData);
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

async function orderGroupLeaderBoard(groupLeaderBoard) {
  const orderedLeaderBoard = groupLeaderBoard.sort(
    (a, b) => b.userPoints - a.userPoints
  );

  const data = [];

  let i = 0;
  for (const player of orderedLeaderBoard) {
    i++;
    const userData = await User.findById(player.player);

    data.push({
      player: userData,
      points: player.userPoints,
      position: i,
    });
  }

  return data;
}

function getRelativePositionFromLeaderBoard(
  currentLeaderBoard,
  pastLeaderBoard
) {
  return currentLeaderBoard.map(currentLeaderBoardPlayer => {
    const relativePos = getPlayerRelativePos(
      currentLeaderBoardPlayer,
      pastLeaderBoard
    );

    return { ...currentLeaderBoardPlayer, relativePos };
  });
}

function getPlayerRelativePos(player, pastLeaderBoard) {
  for (const pastLeaderBoardPlayer of pastLeaderBoard) {
    if (player.player._id.equals(pastLeaderBoardPlayer.player._id)) {
      if (player.position === pastLeaderBoardPlayer.position) return 'Keep';

      if (player.position > pastLeaderBoardPlayer.position) return 'Up';

      return 'Down';
    }
  }
}
