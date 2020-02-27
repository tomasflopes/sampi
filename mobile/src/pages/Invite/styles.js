import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  topBar: {
    flex: 1.2,
    backgroundColor: '#78a7ff',
    flexDirection: 'row',
    alignItems: 'center',
  },

  backArrow: {
    flex: 1,
    left: 10,
    top: 5,
  },



  textHolder: {
    flex: 2,
    alignItems: 'center',
  },

  headerText: {
    marginTop: 40,
    width: 320,
    flex: 1,
    fontFamily: 'Roboto',
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
    borderColor: '#23354c',
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
    color: '#23354c',
    alignItems: "center",
    left: 10,
  },

  clipboardIcon: {
    right: 5,
    color: '#2d3751',
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
    backgroundColor: '#23354c',
    color: '#ccc',
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
