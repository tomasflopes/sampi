const request = require('supertest');

const server = require('../src/server');

const Group = require('../src/models/Group');

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

describe('CRUD Group', () => {
  it('expect to return all groups', (done) => {
    request(server)
      .get('/group')
      .expect(200, done);
  });

  it('expect to store new group', (done) => {
    request(server)
      .post('/group')
      .send({
        players: [
          "Kronk",
          "Loko"
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


  it('expect to add player to group', async (done) => {
    const lastElement = await getLastElement(Group);

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        name: "BodyBuilder"
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('expect to throw error', async (done) => {
    const lastElement = await getLastElement(Group);

    request(server)
      .put('/group/' + lastElement._id.toString())
      .send({
        name: "BodyBuilder"
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
