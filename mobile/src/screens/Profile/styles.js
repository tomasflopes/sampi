import * as React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },

  firstRow: {
    flex: .8,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  logoutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    alignItems: 'center',
  },

  logoutIcon: {
    fontSize: 32,
    color: '#470000',
  },

  logoutText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#470000',
  },

  logo: {
    flex: 1,
    marginRight: 15,
  },

  firstRowSpacer: {
    flex: 1,
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
    flex: 1,
    width: 110,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  playerName: {
    fontSize: 18,
  },

  mainInfoContainer: {
    flex: 3,
    marginTop: 15,
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

  mainInfoText: {
    fontSize: 14,
    marginLeft: 6,
  },

  mainInfoIcon: {
    fontSize: 18,
  },

  mainInfoLast: {
    borderBottomWidth: 1,
  },

  spacer: {
    flex: .3,
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
