const request = require('supertest');

const getLastElement = require('./utils/getLastElement');

const faker = require('faker');

const server = require('../src/server');

const User = require('../src/models/User');

const path = require('path');

require('dotenv').config();

const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('User Registration Test', () => {
  it('should list all users', (done) => {
    request(server)
      .get('/api/user')
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should create new user', async () => {
    await request(server)
      .post('/api/user/register')
      .field('name', faker.name.findName())
      .field('email', faker.internet.email())
      .field('password', faker.internet.password())
      .field('sex', "Male")
      .field('birth', faker.date.past().toString())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_1.jpeg'))
      .expect(201);
  });

  it('should not create new user because the name already exists', async (done) => {
    const mockUser = await getLastElement(User);

    request(server)
      .post('/api/user/register')
      .field('name', mockUser.name)
      .field('email', faker.internet.email())
      .field('password', faker.internet.password())
      .field('sex', "Male")
      .field('birth', faker.date.past().toString())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_1.jpeg'))
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the email already exists', async (done) => {
    const mockUser = await getLastElement(User);

    request(server)
      .post('/api/user/register')
      .field('name', faker.name.findName())
      .field('email', mockUser.email)
      .field('password', faker.internet.password())
      .field('sex', "Male")
      .field('birth', faker.date.past().toString())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_1.jpeg'))
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the name is not allowed', (done) => {
    request(server)
      .post('/api/user/register')
      .field('name', "A")
      .field('email', faker.internet.email())
      .field('password', faker.internet.password())
      .field('sex', "Male")
      .field('birth', faker.date.past().toString())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_1.jpeg'))
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the password is not allowed', (done) => {
    request(server)
      .post('/api/user/register')
      .field('name', faker.name.findName())
      .field('email', faker.internet.email())
      .field('password', "123")
      .field('sex', "Male")
      .field('birth', faker.date.past().toString())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_1.jpeg'))
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit all user information', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .field('name', faker.name.findName())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_.jpeg'))
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit only user name', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .field('name', faker.name.findName())
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not edit user information when provided with not valid data', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .send({
        name: 'A',
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should delete user', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .delete('/api/user/' + lastUser._id.toString())
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
