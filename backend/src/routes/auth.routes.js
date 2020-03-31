const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/', UserController.index);
routes.post('/register', multer(multerConfig).single("file"), UserController.store);
routes.post('/login', UserController.login);
routes.put('/:id', multer(multerConfig).single("file"), UserController.update);
routes.delete('/:id', UserController.delete);

module.exports = routes;
