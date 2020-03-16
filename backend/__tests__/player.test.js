require('dotenv').config();
const request = require('supertest');

const server = require('../src/server');

const Player = require('../src/models/Player');

beforeAll(async () => {
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(() => {
  const mongoose = require('mongoose');

  mongoose.disconnect();
});

describe('CRUD Player', () => {
  it('expect to return all players', (done) => {
    request(server)
      .get('/player')
      .expect(200, done);
  });

  it('expect to store new player', (done) => {
    request(server)
      .post('/player')
      .send({
        name: "Kronk",
        avatar_url: "https://pbs.twimg.com/profile_images/1183357552417017856/F5QGKDA9_400x400.jpg",
        sex: "Male",
        birth: "2002-03-05",
        email: "tomas050302@gmail.com",
        phone: 910583692,
        position: "Defender",
      })
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new player', (done) => {
    request(server)
      .post('/player')
      .send({
        name: "Kronk",
        avatar_url: "https://pbs.twimg.com/profile_images/1183357552417017856/F5QGKDA9_400x400.jpg",
        sex: "Male",
        birth: "2002-03-05",
        email: "tomas050302@gmail.com",
        phone: 910583692,
        position: "Defender",
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect change player name', async (done) => {
    const { _id } = await Player.findOne({ name: "Kronk" });

    request(server)
      .put('/player/' + _id)
      .send({
        name: "Lodo",
        position: "Forward"
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to delete player', async (done) => {
    const { _id } = await Player.findOne({ name: "Lodo" });

    request(server)
      .delete('/player/' + _id)
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
