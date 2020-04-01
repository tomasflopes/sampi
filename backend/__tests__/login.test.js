const getLastElement = require('./utils/getLastElement');
const createUser = require('./utils/createUser');
const purgeMockUsers = require('./utils/purgeMockUsers');

const request = require('supertest');

const faker = require('faker');

require('dotenv').config();

const server = require('../src/server');

const User = require('../src/models/User');

const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  await createUser({ password: 'strongpassword' });
});

afterAll(async () => {
  await purgeMockUsers();
  await mongoose.disconnect();
});

describe('User Login Test', () => {
  it("should not authenticate user because the email doesn't exists", (done) => {
    request(server)
      .post('/api/user/login')
      .send({
        email: faker.internet.email(),
        password: 'strongpassword',
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not authenticate user because password is incorrect', (done) => {
    request(server)
      .post('/api/user/login')
      .send({
        email: faker.internet.email(),
        password: 'strongpassword',
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should authenticate user with valid credentials', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .post('/api/user/login')
      .send({
        email: lastUser.email,
        password: 'strongpassword',
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
