import { StyleSheet } from 'react-native';

import { general } from '../../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  logoContainer: {
    flex: .8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 125,
    width: 125,
  },

  birthdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  birthdayDropDown: {
    padding: 35,
    color: '#000',
  },

  formContainer: {
    flex: 4,
    padding: 20,
  },

  buttonSignIn: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonsLightBlue,
  },

  buttonText: {
    flex: 1,
    alignItems: 'center',
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: 'center',
    fontSize: 25,
    color: colors.mainBlue,
  },

  signUpTextContainer: {
    flex: .8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  simpleSignUpText: {
    fontSize: 17,
  },

  clickableSignUpText: {
    color: colors.highlightYellow,
    fontSize: 17,
  },
});
