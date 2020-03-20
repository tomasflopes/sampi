const request = require('supertest');

const faker = require('faker');

const server = require('../src/server');

const User = require('../src/models/User');

const { createUser } = require('../src/utils/createUser');

const Game = require('../src/models/Game');

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
  createUser();
});

afterAll(async () => {
  const mongoose = require('mongoose');

  await User.deleteMany({ sex: 'Male' });

  await mongoose.disconnect();
});

describe('CRUD Game', () => {
  it('expect to return all games', (done) => {
    request(server)
      .get('/game')
      .expect(200, done);
  });

  it('expect to store new game', async (done) => {
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/game')
      .send({
        playersArray: [
          usersIds[0],
          usersIds[1],
          usersIds[2]
        ],
        date: faker.date.future(),
        location: faker.address.city()
      })
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new game when provided with invalid id', async (done) => {
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/game')
      .send({
        playersArray: [
          usersIds[0],
          usersIds[1],
          usersIds[2],
          faker.internet.password
        ],
        date: faker.date.future(),
        location: faker.address.city()
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to store new game without location', async (done) => {
    const users = await User.find();

    const usersIds = users.map(user => user._id);

    request(server)
      .post('/game')
      .send({
        playersArray: [
          usersIds[0],
          usersIds[1],
          usersIds[2]
        ],
        date: faker.date.future()
      })
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to update game info with mvp', async (done) => {
    const lastElement = await getLastElement(Game);

    const mvp = await getLastElement(User);

    request(server)
      .put('/game/' + lastElement._id.toString())
      .send({
        result: "08-05",
        mvp: mvp._id.toString()
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to update game info without mvp', async (done) => {
    const lastElement = await getLastElement(Game);

    request(server)
      .put('/game/' + lastElement._id.toString())
      .send({
        result: "08-05",
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to delete game', async (done) => {
    const lastElement = await getLastElement(Game);

    request(server)
      .delete('/game/' + lastElement._id.toString())
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
