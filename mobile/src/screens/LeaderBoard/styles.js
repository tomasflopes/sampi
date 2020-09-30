import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  header: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.mainBlue,
    marginTop: 10,
  },

  comingSoon: {
    marginTop: 5,
    justifyContent: 'center',
  },

  comingSoonText: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.midGray,
  },

  gamesHolder: {
    flex: 4,
  },

  gamesHolderContent: {
    display: 'flex',
    alignItems: 'center',
  },

  tableHeader: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-around',
  },

  playerContainer: {
    display: 'flex',
    flexDirection: 'row',

    height: 40,
    width: '90%',

    alignItems: 'center',
    justifyContent: 'space-around',

    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  playerPosition: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',

    fontSize: 20,
  },

  playerInfo: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',

    fontSize: 18,
  },

  playerName: {
    fontSize: 15,
    overflow: 'scroll',
  },

  playerPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
