const Player = require('../src/models/Player');

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

afterAll(async () => {
  await Player.deleteOne({ name: 'Manel' });

  const mongoose = require('mongoose');
  mongoose.disconnect();
});

describe('Utils Unit Testing', () => {
  it('Should return last element of collection to a given Model', async () => {
    const createdPlayer = await Player.create({
      name: 'Manel'
    });

    const mockPlayer = await getLastElement(Player);

    expect(createdPlayer.name).toBe(mockPlayer.name);
  })
});
