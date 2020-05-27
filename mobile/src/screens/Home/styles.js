import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  logoContainer: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  logo: {
    paddingTop: 80,
    height: 125,
    width: 125,
  },

  divider: {
    flex: 2,
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: colors.mainBlue,
    borderTopColor: colors.mainBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cards: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
  },

  buttonsContainer: {
    flex: 3,
  },

  buttonInvite: {
    flex: 1,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonsLightBlue,
  },

  buttonCreate: general.fullWidthButton,

  buttonText: general.fullWidthButtonText,

  cardsHeader: {
    flex: 1,
    fontSize: 20,
    color: colors.mainBlue,
    marginTop: 5,
  },

  teamsContainer: {
    flex: 2,
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
});
