const request = require('supertest');

const { getLastElement, generateToken, createUser } = require('./utils');

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

  await createUser();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('User Test', () => {
  it('should list user info with jwt token', async () => {
    const token = await generateToken();

    await request(server)
      .get('/user')
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
  });

  it('should not list user info without jwt token', async () => {
    await request(server)
      .get('/user')
      .expect(401)
  });

  it('should not list user info with invalid jwt token', async () => {
    await request(server)
      .get('/user')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
  });


  it('should create new user', (done) => {
    request(server)
      .post('/api/user/register')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        gender: "Male",
        birth: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
        position: 'Defender',
      })
      .expect(201)
      .end(() => {
        done();
      });
  });

  it('should not create new user because the name already exists', async (done) => {
    const mockUser = await getLastElement(User);

    request(server)
      .post('/api/user/register')
      .send({
        name: mockUser.name,
        email: faker.internet.email(),
        password: faker.internet.password(),
        gender: "Male",
        birth: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
        position: 'Defender',
      })
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
      .send({
        name: faker.name.findName(),
        email: mockUser.email,
        password: faker.internet.password(),
        gender: "Male",
        birth: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
        position: 'Defender',
      })
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
      .send({
        name: 'A',
        email: faker.internet.email(),
        password: faker.internet.password(),
        gender: "Male",
        birth: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
        position: 'Defender',
      })
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
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '123',
        gender: "Male",
        birth: faker.date.past().toString(),
        phone: faker.phone.phoneNumber(),
        position: 'Defender',
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit all editable user information', async (done) => {
    const mockUser = await getLastElement(User);
    const token = await generateToken();

    console.log(token);

    request(server)
      .put('/user')
      .field('name', faker.name.findName())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_2.jpeg'))
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not edit user information when invalid token is provided', async (done) => {
    request(server)
      .put('/user')
      .field('name', faker.name.findName())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_2.jpeg'))
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not edit user information when token is not provided', async (done) => {
    request(server)
      .put('/user')
      .field('name', faker.name.findName())
      .field('phone', faker.phone.phoneNumber())
      .attach('file', path.resolve(__dirname, 'utils', 'img', 'test_avatar_2.jpeg'))
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit only user name (without file)', async (done) => {
    const token = await generateToken();

    request(server)
      .put('/user')
      .field('name', faker.name.findName())
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not edit user information when provided with not valid data', async (done) => {
    const token = await generateToken();

    request(server)
      .put('/user')
      .send({
        name: 'A',
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should delete user', async (done) => {
    const token = await generateToken();

    request(server)
      .delete('/user')
      .set('Authorization', `Bearer: ${token}`)
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
