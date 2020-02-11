const Player = require('../models/Player')

module.exports = {
  async index(request, response) {
    const players = await Player.find();

    return response.json(players);
  },

  async store(request, response) {
    const { name, avatar_url, sex, birth, email, phone, position } = request.body;

    player = await Player.create({
      name,
      avatar_url,
      sex,
      birth,
      email,
      phone,
      position
    });

    return response.json(`${name} was registred!`);
  },

  async update(request, response) {

  },

  async destroy(request, response) {

  },
};

/* function existsUserWithThisName(name) {
  return await Player.findOne({ name });
} */
