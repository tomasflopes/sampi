import { AsyncStorage } from 'react-native'

async function checkAuth() {
  const token = await AsyncStorage.getItem('jwt');

  return token === null ? true : false;
}

module.exports = { checkAuth };
