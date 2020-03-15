const request = require('supertest');

const server = require('../src/server');

const Game = require('../src/models/Game');

const getLastElement = require('../src/utils/getLastElement');

beforeAll(async () => {
  const mongoose = require('mongoose');

  const { test: mongooseUrl } = require('../src/config/mongooseSettings');

  mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(() => {
  const mongoose = require('mongoose');

  mongoose.disconnect();
});

describe('CRUD Game', () => {
  it('expect to return all games', (done) => {
    request(server)
      .get('/game')
      .expect(200, done);
  });

  it('expect to store new game', (done) => {
    request(server)
      .post('/game')
      .send({
        playersArray: [
          "Kronk",
          "Amigo",
          "Tropa",
          "Yoyo",
          "Esse"
        ],
        date: "2020-02-13",
        location: "Espinho"
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

    request(server)
      .put('/game/' + lastElement._id.toString())
      .send({
        result: "08-05",
        mvp: "Amigo"
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
