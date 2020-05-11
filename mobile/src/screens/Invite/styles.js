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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },

  headerText: {
    marginTop: 30,
    width: 320,
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
  },

  urlPiece: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },

  headerUrl: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    left: -30,
  },

  urlHolder: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderStyle: 'dashed',
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

  socialsSpacer: {
    flex: 1,
  },

  shareButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  shareIcon: {
    fontSize: 20,
  },

  shareText: {
    left: 2,
    fontSize: 15,
  },

  bottomSpacer: {
    flex: 1,
  },
});
