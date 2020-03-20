const Game = require('../models/Game');
const getLastElement = require('../../__tests__/utils/getLastElement');

module.exports = {
  async index(request, response) {
    return response.json(await getLastElement(Game));
  }
}
