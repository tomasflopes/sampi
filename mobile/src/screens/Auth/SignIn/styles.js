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

  buttonText: general.fullWidthButtonText,

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

  helpButton: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainer: {
    flex: 1,
  },

  modalCloseButton: general.fullWidthButton,

  modalCloseButtonText: general.fullWidthButtonText,

  modalHeader: {
    fontSize: 22,
    color: colors.mainBlue,
  },

  modalText: {
    fontSize: 18,
    color: colors.mainBlue,
  },
});
