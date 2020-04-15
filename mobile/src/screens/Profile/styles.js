import * as React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },

  firstRow: {
    flex: .8,
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center'
  },

  logoutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutIcon: {
    fontSize: 32,
    color: '#470000',
  },

  logoutText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#470000',
  },

  logo: {
    flex: 2,
    fontSize: 35
  },

  basicInformationRow: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  basicInformation: {
    fontSize: 14
  },

  playerPhotoName: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60
  },

  playerName: {
    marginTop: 2,
    fontSize: 18,
  },

  mainInfoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainInfo: {
    flex: 1,
    flexDirection: 'row',
    width: 280,
    borderTopWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mainInfoLast: {
    borderBottomWidth: 1,
  },

  spacer: {
    flex: .2,
  },

  editInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 184, 255, 0.2)',
  },

  editInfoText: {
    fontSize: 25
  },

  bottomNavbar: {
    flex: 1,
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },
});
