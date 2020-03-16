const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.post('/register', UserController.store);

module.exports = routes;
