const { Router } = require('express');

const GameController = require('../controllers/GameController');
const GroupController = require('../controllers/GroupController');
const CardController = require('../controllers/CardController');
const UserController = require('../controllers/UserController');

const multer = require('multer');
const multerConfig = require('../config/multer');

const routes = Router();

routes.get('/game', GameController.index);
routes.post('/game', GameController.store);
routes.put('/game/:id', GameController.update);
routes.delete('/game/:id', GameController.destroy);

routes.get('/group', GroupController.index);
routes.post('/group', GroupController.store);
routes.put('/group/:id', GroupController.update);
routes.delete('/group/:id', GroupController.destroy);

routes.get('/card', CardController.index);

routes.get('/user', UserController.index);
routes.put('/user', multer(multerConfig).single("file"), UserController.update);
routes.delete('/user', UserController.delete);

module.exports = routes;
