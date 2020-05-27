const Game = require('../models/Game');
const { DecodeJWTToken, GetUserGroup } = require('../utils');

module.exports = {
  async index(request, response) {
    const userId = await DecodeJWTToken(request);
    const userGroup = await GetUserGroup(userId);

    console.log(userGroup);
    if (userGroup.length === 0) return response.status(400).json({ Message: 'User is not in a group' });

    const games = await Game
      .find()
      .sort({ _id: -1 });

    const userGames = games.filter(game => userGroup[0].equals(game.idGroup));

    return response.status(200).json(userGames[0]);
  }
}
