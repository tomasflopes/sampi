const faker = require('faker');

require('dotenv').config();

const User = require('../src/models/User');

const { createUser } = require('./utils/createUser');

const getLastElement = require('./utils/getLastElement');

beforeAll(async () => {
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(async () => {
  await User.deleteMany({ sex: 'Male' }); //? Fixed field in creation

  const mongoose = require('mongoose');

  await mongoose.disconnect();
});

describe('Utils Unit Testing', () => {
  it('Should create a new user', async () => {
    expect(createUser()).toBeDefined();
  });

  it('Should create a new user with given params', async () => {
    expect(createUser({ name: 'Lodo' })).toBeDefined();
  });

  it('Should return last element of collection to a given Model', async () => {
    createUser(); //? Mock User just to assure that it is the last element

    const lastUser = await User.create({
      name: 'Kronk',
      email: faker.internet.email(),
      password_hash: faker.random.alphaNumeric(),
      birth: faker.date.past(),
      sex: 'Male',
    });

    const mockUser = await getLastElement(User);

    expect(lastUser.name).toBe(mockUser.name);
  });
});
