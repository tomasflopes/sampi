const { Router } = require('express');
const PlayerController = require('./controllers/PlayerController');

const routes = Router();

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.store);
/* routes.put('/player', PlayerController.update); */
routes.delete('/player', PlayerController.destroy);

module.exports = routes;
