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
    marginTop: 30,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: colors.mainBlue,
    borderTopColor: colors.mainBlue,
    flex: 2,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
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
});
