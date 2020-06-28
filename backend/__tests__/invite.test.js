const request = require('supertest');
require('dotenv').config();

const Group = require('../src/models/Group');

const {
  createGroup,
  createUser,
  purgeMockUsers,
  getLastElement,
  generateToken,
} = require('./utils/');
const server = require('../src/server');

const faker = require('faker');

const mongoose = require('mongoose');

beforeAll(async () => {
  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const { _id } = await createUser();
  await createGroup({ players: [_id] });
  await createUser();
});

afterAll(async () => {
  await purgeMockUsers();
  await mongoose.disconnect();
});

describe('Invite Suit', () => {
  it('should not be able to invite player if group is not specified', async done => {
    const token = await generateToken();

    request(server)
      .post('/invite')
      .set('Authorization', `Bearer: ${token}`)
      .expect(404)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should add user to group', async done => {
    const { _id: groupId } = await getLastElement(Group);
    await createUser();
    const token = await generateToken();

    request(server)
      .post(`/invite/${groupId}`)
      .set('Authorization', `Bearer: ${token}`)
      .expect(200)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not add duplicated user to group', async done => {
    const { _id: groupId } = await getLastElement(Group);
    const token = await generateToken();

    request(server)
      .post(`/invite/${groupId}`)
      .set('Authorization', `Bearer: ${token}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not add user to group if no token is specified', async done => {
    const { _id: groupId } = await getLastElement(Group);

    request(server)
      .post(`/invite/${groupId}`)
      .expect(401)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not add user to group if token is invalid', async done => {
    const { _id: groupId } = await getLastElement(Group);

    request(server)
      .post(`/invite/${groupId}`)
      .set('Authorization', `Bearer: ${faker.internet.password()}`)
      .expect(400)
      .end(error => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
