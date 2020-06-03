const request = require('supertest');

require('dotenv').config();

const { generateToken, createUser, purgeMockUsers } = require('./utils');

const server = require('../src/server');

const faker = require('faker');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  await createUser();
});

afterAll(async () => {
  await purgeMockUsers();
  await mongoose.disconnect();
});

describe('Card Testing', () => {
  it('expect to not return last game when not provided token', (done) => {
    request(server)
      .get('/card')
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return last game when provided invalid token', async (done) => {
    request(server)
      .get('/card')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
