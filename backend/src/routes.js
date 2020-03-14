const { Router } = require('express');

const PlayerController = require('./controllers/PlayerController');
const GameController = require('./controllers/GameController');
const GroupController = require('./controllers/GroupController');
const CardController = require('./controllers/CardController');

const routes = Router();

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.store);
routes.put('/player/:id', PlayerController.update);
routes.delete('/player/:id', PlayerController.destroy);

routes.get('/game', GameController.index);
routes.post('/game', GameController.store);
routes.put('/game/:id', GameController.update);
routes.delete('/game/:id', GameController.destroy);

routes.get('/group', GroupController.index);
routes.post('/group', GroupController.store);
routes.put('/group/:id', GroupController.update);
routes.delete('/group/:id', GroupController.destroy);

routes.get('/card', CardController.index);

module.exports = routes;
