import { StyleSheet } from 'react-native';

import { general } from '../../../styles'

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
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },

  buttonText: {
    flex: 1,
    alignItems: 'center',
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: 'center',
    fontSize: 25,
    color: '#1e2a40',
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
    color: '#bfa25b',
    fontSize: 17,
  },
});
