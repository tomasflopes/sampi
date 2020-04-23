import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  logoContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 125,
    width: 125,
  },

  textContainer: {
    flex: .5,
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
  },

  formContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
  },

  buttonSignIn: {
    marginTop: 50,
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

  spacer: {
    flex: .5,
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
