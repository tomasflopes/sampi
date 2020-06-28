const request = require('supertest');

const faker = require('faker');

require('dotenv').config();

const server = require('../src/server');

const User = require('../src/models/User');
const Group = require('../src/models/Group');

const {
  createUser,
  createGroup,
  generateToken,
  getLastElement,
  purgeMockUsers,
} = require('./utils');

const Game = require('../src/models/Game');

const mongoose = require('mongoose');

beforeAll(async () => {
  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const { _id: id1 } = await createUser();
  const { _id: id2 } = await createUser();
  const { _id: id3 } = await createUser();

  await createGroup({ players: [id1, id2, id3] });
});

afterAll(async () => {
  await Game.deleteMany({});
  await Group.deleteMany({});
  await purgeMockUsers();
  await mongoose.disconnect();
});

describe('CRUD Game', () => {
  it('expect not to return all games when user has no group', async done => {
    const { _id } = await createUser();
    const token = await generateToken();
    await User.deleteOne({ _id });

    request(server)
      .get('/game')
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to return all games', async done => {
    const token = await generateToken();

    request(server)
      .get('/game')
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return all games when not provided token', done => {
    request(server)
      .get('/game')
      .expect(401)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return all games when provided invalid token', done => {
    request(server)
      .get('/game')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to store new game', async done => {
    const token = await generateToken();

    const users = await User.find();
    const groups = await Group.find();

    console.log(users);
    console.log(groups);

    request(server)
      .post('/game')
      .send({
        teamA: [users[0], users[1]],
        teamB: [users[2]],
        date: faker.date.future(),
        location: faker.address.county(),
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(201)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect not to store new game when players are from different groups', async done => {
    const token = await generateToken();

    const { _id } = await createUser();
    const { _id: groupId } = await createGroup({ players: [_id] });

    const users = await User.find();

    request(server)
      .post('/game')
      .send({
        teamA: [users[0], users[1]],
        teamB: [users[2], users[3]],
        date: faker.date.recent(2),
        location: faker.address.city(),
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });

    await User.deleteOne({ _id });
    await Group.deleteOne({ _id: groupId });
  });

  it('expect to not store new game when not provided token', async done => {
    const users = await User.find();

    request(server)
      .post('/game')
      .send({
        teamA: [users[0], users[1]],
        teamB: [users[2]],
        date: faker.date.future(),
        location: faker.address.city(),
      })
      .expect(401)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not store new game when provided with invalid token', async done => {
    const users = await User.find();

    request(server)
      .post('/game')
      .send({
        teamA: [users[0], users[1]],
        teamB: [users[2]],
        date: faker.date.future(),
        location: faker.address.city(),
      })
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to store new game without location', async done => {
    const token = await generateToken();

    const users = await User.find();

    request(server)
      .post('/game')
      .send({
        teamA: [users[0], users[1]],
        teamB: [users[2]],
        date: faker.date.future(),
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(201)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to return last game from user group', async done => {
    const token = await generateToken();

    request(server)
      .get('/games')
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return last game when provided invalid token', async done => {
    request(server)
      .get('/games')
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not return last game when user has no group', async done => {
    const { _id } = await createUser();
    const token = await generateToken();

    request(server)
      .get('/games')
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });

    await User.deleteOne({ _id });
  });

  it('expect to not return last game when not provided token', async done => {
    request(server)
      .get('/games')
      .expect(401)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to update game info with mvp', async done => {
    const token = await generateToken();

    const mvp = await getLastElement(User);

    request(server)
      .put('/game')
      .send({
        result: '08-05',
        mvp,
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(202)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not update game info with mvp when token is not provided', async done => {
    const mvp = await getLastElement(User);

    request(server)
      .put('/game')
      .send({
        result: '08-05',
        mvp,
      })
      .expect(401)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to not update game info with mvp when provided token is invalid', async done => {
    const mvp = await getLastElement(User);

    request(server)
      .put('/game')
      .send({
        result: '08-05',
        mvp,
      })
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to update game info without mvp', async done => {
    const token = await generateToken();

    request(server)
      .put('/game')
      .send({
        result: '08-05',
      })
      .set('Authorization', `Bearer: ${token}`)
      .expect(202)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
