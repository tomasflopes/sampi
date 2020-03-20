const request = require('supertest');
const server = require('../src/server');
const getLastElement = require('./utils/getLastElement')
const { createUser } = require('./utils/createUser');

const User = require('../src/models/User');

beforeAll(async () => {
  const mongoose = require('mongoose');

  await mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  createUser();
});

afterAll(async () => {
  const mongoose = require('mongoose');

  await mongoose.disconnect();
});

describe('Sessions Privilegies', () => {
  it('should be able to access private routes with valid token', () => {
    const user = getLastElement(User);
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    request(server)
      .get('/group')
      .set('Authorization', `Bearer: ${token}`);
  });
})
