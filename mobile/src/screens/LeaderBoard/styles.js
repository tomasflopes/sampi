import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  header: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.mainBlue,
    marginVertical: 15,
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

    height: 45,
    marginHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'space-around',

    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  playerPositionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },

  playerRelativePos: {
    width: 12,
    height: 14,

    marginRight: 28,
  },

  playerPosition: {
    textAlign: 'center',
    fontWeight: 'bold',

    fontSize: 20,

    right: 5,
  },

  playerInfo: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1.2,

    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',

    fontSize: 18,
  },

  playerName: {
    fontSize: 15,
    flex: 1,
  },

  playerPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,

    marginRight: 10,
  },
});
