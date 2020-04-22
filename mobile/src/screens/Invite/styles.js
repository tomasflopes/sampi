import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  topBar: {
    flex: 1.2,
    backgroundColor: colors.mainBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backArrowHolder: {
    top: 5,
    left: 8,
  },

  textHolder: {
    flex: 2,
    alignItems: 'center',
  },

  headerText: {
    marginTop: 40,
    width: 320,
    flex: 1,
    fontSize: 25,
    lineHeight: 29,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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

  socialsHolder: {
    flex: 3,
    justifyContent: 'space-evenly',
  },

  socials: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 280,
  },

  socialMediaLogo: {
    fontSize: 45,
    flex: .8,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: colors.mainBlue,
    color: colors.background,
    padding: 15,
  },

  socialsSpacer: {
    flex: .5,
  },

  shareText: {
    fontSize: 16,
    textAlign: 'center',
  },

  bottomSpacer: {
    flex: 2,
  }
});
