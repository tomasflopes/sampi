const Player = require('../models/Player');
const Game = require('../models/Game');

module.exports = {
  async index(request, response) {
    Game.find().sort('_id').find(function (err, post) {
      if (!err) {
        return (response.json(post[post.length - 1]));
      }
    });
  }
}
