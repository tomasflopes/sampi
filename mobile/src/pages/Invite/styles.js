import * as React from 'react'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  topBar: {
    flex: 1,
    backgroundColor: '#78a7ff',
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
    borderRadius: 5,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  url: {
    fontSize: 14,
    flex: 1,
    color: '#23354c',
    alignItems: "center",
    left: 10,
  },

  socialsHolder: {
    flex: 4,
    justifyContent: 'space-evenly',
  },

  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 320,
  },

  socialMediaLogo: {
    fontSize: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  shareText: {
    fontSize: 16,
    textAlign: 'center',
  },

  bottomSpacer: {
    flex: 2,
  }
});
