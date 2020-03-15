const request = require('supertest');

const server = require('../src/server');

beforeAll(async () => {
  const mongoose = require('mongoose');

  const { test: mongooseUrl } = require('../src/config/mongooseSettings');

  mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

describe('Card Testing', () => {
  it('expect to return last game', (done) => {
    request(server)
      .get('/card')
      .expect(200, done);
  });
});
