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

  teamsContainer: {
    flex: 1,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  teamName: {
    fontSize: 18,
    textAlign: 'center',
  },

  teamContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamLogo: {
    height: 85,
    width: 85,
  },

  resultText: {
    textAlign: 'center',
    fontSize: 32,
  },

  cardMessageHeader: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.mainBlue,
  },

  cardMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  loose: {
    fontSize: 25,
    marginLeft: 10,
    color: colors.logoutRed,
  },

  win: {
    fontSize: 25,
    marginLeft: 10,
    color: colors.selectedGreen,
  },

  tie: {
    color: colors.midGray,
  },
});
