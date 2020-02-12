const { Router } = require('express');
const PlayerController = require('./controllers/PlayerController');
const GameController = require('./controllers/GameController');

const routes = Router();

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.store);
routes.put('/player', PlayerController.update);
routes.delete('/player', PlayerController.destroy);

routes.get('/game', GameController.index);
routes.post('/game', GameController.store);
routes.put('/game', GameController.update);
routes.delete('/game', GameController.destroy);

module.exports = routes;
