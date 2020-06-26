const { createUser, generateToken, purgeMockUsers } = require('./utils')

require('dotenv').config();

const User = require('../src/models/User');

const request = require('supertest');

const faker = require('faker');

require('dotenv').config();

const server = require('../src/server');

const mongoose = require('mongoose');

beforeAll(async () => {
  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  await createUser();
  await createUser();
});

afterAll(async () => {
  await purgeMockUsers();
  await mongoose.disconnect();
});

describe('CRUD Group', () => {
  it('expect to not return all groups when not provided with token', (done) => {
    request(server)
      .get('/group')
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return all groups when provided with invalid token', (done) => {
    request(server)
      .get('/group')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to store new group', async (done) => {
    const token = await generateToken();

    request(server)
      .post('/group')
      .set('Authorization', `Bearer: ${token}`)
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to return user group', async (done) => {
    const token = await generateToken();

    request(server)
      .get('/group')
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new group when not provided token', async (done) => {
    request(server)
      .post('/group')
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new group when provided with invalid token', async (done) => {
    request(server)
      .post('/group')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to update group name', async (done) => {
    const token = await generateToken();

    request(server)
      .put('/group')
      .send({
        name: 'test'
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not update group name if user is not in a group', async (done) => {
    const { _id } = await createUser();
    const token = await generateToken();

    request(server)
      .put('/group')
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });

    await User.deleteOne({ _id });
  });

  it('expect to not update group name when is provided invalid token', async (done) => {
    request(server)
      .put('/group')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not update group name when no token is provided', async (done) => {
    request(server)
      .put('/group')
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not delete group when not provided token', async (done) => {
    request(server)
      .delete('/group')
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not delete group when provided invalid token', async (done) => {
    request(server)
      .delete('/group')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to delete group', async (done) => {
    const token = await generateToken();

    request(server)
      .delete('/group')
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


