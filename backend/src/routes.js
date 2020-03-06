const { Router } = require('express');

const PlayerController = require('./controllers/PlayerController');
const GameController = require('./controllers/GameController');
const GroupController = require('./controllers/GroupController');
const CardController = require('./controllers/CardController');

const routes = Router();

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.store);
routes.put('/player', PlayerController.update);
routes.delete('/player', PlayerController.destroy);

routes.get('/game', GameController.index);
routes.post('/game', GameController.store);
routes.put('/game', GameController.update);
routes.delete('/game', GameController.destroy);

routes.get('/group', GroupController.index);
routes.post('/group', GroupController.store);
routes.put('/group', GroupController.update);
routes.delete('/group', GroupController.destroy);

routes.get('/card', CardController.index);

module.exports = routes;
