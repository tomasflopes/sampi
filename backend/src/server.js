const privateRoutes = require('./routes/private.routes');
const express = require('express');

const app = express();

app.use(express.json());

app.use(privateRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api/user', authRoutes);

module.exports = app;
