const Game = require('../models/Game');
const getLastElement = require('../../__tests__/utils/getLastElement');

module.exports = {
  async index(request, response) {
    const lastGame = await getLastElement(Game);

    return response.status(200).json(lastGame);
  }
}
