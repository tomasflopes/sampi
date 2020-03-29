require('dotenv').config();
const app = require('./server');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(process.env.PORT || 3333);
