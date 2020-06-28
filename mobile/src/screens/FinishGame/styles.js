import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  headerText: {
    flex: 2,
    fontSize: 18,
    color: colors.mainBlue,
    paddingHorizontal: 18,
    textAlign: 'center',
    paddingVertical: 15,
  },

  resultContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  teamContainer: {
    flex: 5,
    alignItems: 'center',
  },

  teamNameContainer: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 5,
  },

  teamNameText: {
    flex: 1,
    fontSize: 15,
  },

  teamResultContainer: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamResultText: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.lightGray,
  },

  resultDivider: {
    flex: 2,
    textAlign: 'center',
    fontSize: 25,
  },

  hintText: {
    fontSize: 14,
    paddingHorizontal: 12,
    color: colors.midGray,
    flex: 1,
    textAlign: 'center',
    marginVertical: 25,
  },

  mvpPickerContainer: {
    flex: 3,
    alignItems: 'center',
  },

  mvpPicker: {
    flex: 1,
    width: 180,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  mvpPickerText: {
    fontSize: 18,
    color: colors.activeDarkBlue,
  },

  noteText: {
    marginTop: 10,
    color: colors.midGray,
    fontSize: 14,
    textAlign: 'center',
  },

  confirmButton: {
    ...general.fullWidthButton,
    flex: 2,
  },

  confirmButtonText: general.fullWidthButtonText,

  modalContainer: {
    flex: 1,
  },

  modalHeader: {
    textAlign: 'center',
    fontSize: 22,
    color: colors.mainBlue,
    marginTop: 10,
    flex: 1,
  },

  playersContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },

  playerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  playerPhoto: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },

  playerName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  closeButton: general.fullWidthButton,

  closeButtonText: general.fullWidthButtonText,
});
