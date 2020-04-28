import React from 'react';
import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  logoContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },

  birthdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  dropDown: {
    marginTop: -18,
    paddingHorizontal: 32,
    color: colors.lightGray,
  },

  formContainer: {
    flex: 6,
    marginTop: -18,
    paddingHorizontal: 15,
    height: '90%',
  },

  buttonSignIn: {
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
    flex: 1,
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
