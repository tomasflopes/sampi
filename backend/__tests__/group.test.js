const createUser = require('./utils/createUser');
const getLastElement = require('./utils/getLastElement');
const purgeMockUsers = require('./utils/purgeMockUsers');
const generateToken = require('./utils/generateToken');

require('dotenv').config();

const request = require('supertest');

const faker = require('faker');

require('dotenv').config();

const server = require('../src/server');

const User = require('../src/models/User');
const Group = require('../src/models/Group');

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
  it('expect to return all groups', async (done) => {
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

    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/group')
      .send({
        name: faker.hacker.adjective(),
        players: [
          usersIds[0],
          usersIds[1]
        ]
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new group when not providing name', async (done) => {
    const token = await generateToken();

    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/group')
      .send({
        players: [
          usersIds[0],
          usersIds[1]
        ]
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

  it('expect to not store new group when not provided token', async (done) => {
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/group')
      .send({
        players: [
          usersIds[0],
          usersIds[1]
        ]
      })
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new group when provided with invalid token', async (done) => {
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/group')
      .send({
        players: [
          usersIds[0],
          usersIds[1]
        ]
      })
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store a new group when provided with invalid id', async (done) => {
    const token = await generateToken();
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/group')
      .send({
        players: [
          usersIds[0],
          usersIds[1],
          faker.internet.password()
        ]
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

  it('expect to add player to group', async (done) => {
    const token = await generateToken();

    await createUser();
    const lastElement = await getLastElement(Group);
    const lastUser = await getLastElement(User);

    const _id = lastUser._id;

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        newPLayer: _id
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

  it('expect to not add player to group when not provided token', async (done) => {
    await createUser();
    const lastElement = await getLastElement(Group);
    const lastUser = await getLastElement(User);

    const _id = lastUser._id;

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        _id
      })
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not add player to group when provided invalid token', async (done) => {
    await createUser();
    const lastElement = await getLastElement(Group);
    const lastUser = await getLastElement(User);

    const _id = lastUser._id;

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        _id
      })
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to throw error when inserting existing player', async (done) => {
    const token = await generateToken();

    const lastElement = await getLastElement(Group);

    const existingPlayer = lastElement.players[0];

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        newPlayer: existingPlayer._id
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

  it('expect to not delete group when not provided token', async (done) => {
    const lastElement = await getLastElement(Group);

    request(server)
      .delete('/group/' + lastElement._id.toString())
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not delete group when provided invalid token', async (done) => {
    const lastElement = await getLastElement(Group);

    request(server)
      .delete('/group/' + lastElement._id.toString())
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
    const lastElement = await getLastElement(Group);

    request(server)
      .delete('/group/' + lastElement._id.toString())
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


