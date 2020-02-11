const Player = require('../models/Player')

module.exports = {
  async index(request, response) {
    const players = await Player.find();

    return response.json(players);
  },

  async store(request, response) {
    const { name } = request.body;

    let player = await Player.findOne({ name }); // Check 

    if (!existsUserWithThisName({ name })) {
      //TODO Get twitter info

      player = await Dev.create({
        name
      });
    }
  },

  async update(request, response) {

  },

  async destroy(request, response) {

  },
};

function existsUserWithThisName(name) {
  return await Player.findOne({ name });
}
