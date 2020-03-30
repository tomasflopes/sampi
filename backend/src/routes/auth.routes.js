const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const UserController = require('../controllers/UserController');
const { celebrate, Segments, Joi } = require("celebrate");

const routes = Router();

routes.get('/', UserController.index);
routes.post('/register',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(2).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
      sex: Joi.string(),
      birth: Joi.date().required(),
      phone: Joi.string(),
    })
  }),
  multer(multerConfig).single("file"),
  UserController.store);

routes.post('/login',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    })
  }),
  UserController.login);

routes.put('/:id',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(2),
      phone: Joi.string(),
    })
  }),
  UserController.update);
routes.delete('/:id', UserController.delete);

module.exports = routes;
