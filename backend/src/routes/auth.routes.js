const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/', UserController.index);
routes.post('/register', UserController.store);

module.exports = routes;
