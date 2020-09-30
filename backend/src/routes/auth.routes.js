const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.post('/login', UserController.login);
routes.post('/register', UserController.store);

module.exports = routes;
