const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { production: mongooseUrl } = require('./config/mongooseSettings');

const app = express();

mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
