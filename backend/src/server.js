const privateRoutes = require('./routes/private.routes');
const express = require('express');
const authMiddleware = require('./middleWares/VerifyJWTToken');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/api/user', authRoutes);

app.use(authMiddleware);
app.use(privateRoutes);

app.use(errors());

module.exports = app;
