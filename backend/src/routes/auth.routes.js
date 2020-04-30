const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.post('/register', UserController.store);
routes.post('/login', UserController.login);

module.exports = routes;
