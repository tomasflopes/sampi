const privateRoutes = require('./routes/private.routes');
const express = require('express');
const authMiddleware = require('./middleWares/VerifyJWTToken');
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan('dev'));

const authRoutes = require('./routes/auth.routes');
app.use('/api/user', authRoutes);

app.use(authMiddleware);
app.use(privateRoutes);

module.exports = app;
