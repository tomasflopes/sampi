import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 125,
    width: 125,
  },

  textContainer: {
    flex: 1,
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
  },

  formContainer: {
    flex: 2,
    width: "100%",
    padding: 20,
  },

  buttonSignIn: {
    flex: .8,
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
