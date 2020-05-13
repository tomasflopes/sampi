import { StyleSheet } from 'react-native';

import { general, colors, metrics } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  topBar: {
    marginTop: 20,
    height: metrics.topBarHeight,
    backgroundColor: colors.activeDarkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backArrowHolder: {
    flex: .5,
    marginLeft: 5,
  },

  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },

  textHolder: {
    flex: 2,
    alignItems: 'center',
  },

  headerText: {
    marginTop: 20,
    width: 320,
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
  },

  formContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  buttonSignIn: general.fullWidthButton,

  buttonText: general.fullWidthButtonText,
});
