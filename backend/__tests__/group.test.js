const request = require('supertest');

const { createUser } = require('../src/utils/createUser');

const faker = require('faker');

require('dotenv').config();

const server = require('../src/server');

const User = require('../src/models/User');
const Group = require('../src/models/Group');

const getLastElement = require('../src/utils/getLastElement');

beforeAll(async () => {
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  createUser();
  createUser();
});

afterAll(async () => {
  const mongoose = require('mongoose');

  await mongoose.disconnect();
});

describe('CRUD Group', () => {
  it('expect to return all groups', (done) => {
    request(server)
      .get('/group')
      .expect(200, done);
  });

  it('expect to store new group', async (done) => {
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
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store a new group when provided with invalid id', async (done) => {
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
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to add player to group', async (done) => {
    createUser();
    const lastElement = await getLastElement(Group);
    const lastUser = await getLastElement(User);

    const _id = lastUser._id;

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        _id
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to throw error when inserting existing player', async (done) => {
    const lastElement = await getLastElement(Group);

    const existingPlayer = lastElement.players[0];

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        _id: existingPlayer._id
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to delete group', async (done) => {
    const lastElement = await getLastElement(Group);

    request(server)
      .delete('/group/' + lastElement._id.toString())
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});


