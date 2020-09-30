const GenerateGameResults = require('./GenerateGameResults');

module.exports = (games, userGroup, userId) => {
  const userGames = games.filter(game => game.idGroup.equals(userGroup._id));

  const openGames = userGames.filter(
    game => typeof game.result !== 'undefined'
  );

  const gameInfo = GenerateGameResults(openGames, userId);

  return openGames.map((object, index) => {
    const gameResult = gameInfo[index];
    return { ...object._doc, gameResult };
  });
};
