const app = require('./server');
const mongoose = require('mongoose');

const { production: mongooseUrl } = require('./config/mongooseSettings');

mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(3333);
