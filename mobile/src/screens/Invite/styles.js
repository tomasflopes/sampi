import { StyleSheet } from 'react-native';

import { general, colors, metrics } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  topBar: {
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

  textHolder: {
    flex: 2.5,
    alignItems: 'center',
    marginBottom: 10,
  },

  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },

  headerText: {
    marginTop: 0,
    width: 320,
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
  },

  firstText: {
    marginTop: 10,
    fontSize: 25
  },

  urlPiece: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },

  headerUrl: {
    flex: 1,
    fontSize: 18,
    left: -30,
  },

  urlHolder: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderStyle: 'dashed',
    top: -20,
  },

  url: {
    fontSize: 14,
    flex: 1,
    color: colors.mainBlue,
    alignItems: "center",
    left: 10,
  },

  clipboardIcon: {
    right: 5,
    color: colors.mainBlue,
    fontSize: 29,
  },

  shareSpace: {
    flex: 2,
    alignItems: 'center',
  },

  shareButton: {
    flex: 1,
    width: 120,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
  },

  shareIcon: {
    fontSize: 30,
    color: colors.mainBlue,
  },

  shareText: {
    left: 2,
    color: colors.mainBlue,
    fontSize: 15,
  },

  spacer: {
    flexGrow: 1,
  },

  leaveGroupSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  leaveButton: {
    flex: 1,
    width: 120,
    marginBottom: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.logoutRed,
    borderRadius: 10,
  },

  leaveText: {
    color: colors.logoutRed
  }
});
