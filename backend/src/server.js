const privateRoutes = require('./routes/private.routes');
const express = require('express');
const authMiddleware = require('./middleWares/VerifyJWTToken');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, "..", "temp", "uploads")));

const authRoutes = require('./routes/auth.routes');
app.use('/api/user', authRoutes);

app.use(authMiddleware);
app.use(privateRoutes);

module.exports = app;
