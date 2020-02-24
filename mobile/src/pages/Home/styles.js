import * as React from 'react'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  title: {
    flex: .5,
    fontSize: 32,
    color: '#2f364c',
    textAlign: 'center',
    marginTop: 50,
  },

  divider: {
    marginTop: 30,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: '#23354c',
    borderTopColor: '#23354c',
    flex: 2,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cards: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
  },

  buttonsContainer: {
    flex: 3,
  },

  buttonInvite: {
    flex: 1,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },

  buttonCreate: {
    flex: 1,
    marginTop: 25,
    marginBottom: 50,
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

  bottomNavbar: {
    flex: 1,
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },

  spacer: {
    flex: .2
  },
});
