const request = require('supertest');

require('dotenv').config();

const { createUser } = require('./utils/createUser');

const jwt = require('jsonwebtoken');

const server = require('../src/server');

beforeAll(async () => {
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });


});

afterAll(async () => {
  const mongoose = require('mongoose');

  await mongoose.disconnect();
});

describe('Card Testing', () => {
  it('expect to return last game', (done) => {
    request(server)
      .get('/card')
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
