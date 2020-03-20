const request = require('supertest');
const server = require('../src/server');
const getLastElement = require('./utils/getLastElement')
const { createUser } = require('./utils/createUser');

require('dotenv').config();

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


    request(server)
      .get('/group')
      .set('Authorization', `Bearer: ${token}`);
  });
})
