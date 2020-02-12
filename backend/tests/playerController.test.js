const { test: mongooseUrl } = require('../src/config/mongooseSettings');
const { store } = require('../src/controllers/PlayerController');
const mongoose = require('mongoose');

describe('list', () => {
  beforeAll(async () => {
    await mongoose.connect(mongooseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  it('should insert one user named kronk', async () => {
    const testPlayer = {
      name: 'kronk',
      avatar_url: 'http://www.foto.com',
      sex: 'M',
      birth: '05-08-2002',
      email: 'email@email.com',
      phone: '919191919',
      position: 'Defender'
    };

    const insertedPlayer = store({
      name: 'kronk',
      avatar_url: 'http://www.foto.com',
      sex: 'M',
      birth: '05-08-2002',
      email: 'email@email.com',
      phone: '919191919',
      position: 'Defender'
    });

    expect(insertedPlayer).toEqual(testPlayer);
  })
});

