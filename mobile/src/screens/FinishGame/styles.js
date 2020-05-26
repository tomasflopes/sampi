import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  headerText: {
    flex: 2,
    fontSize: 18,
    color: colors.mainBlue,
    paddingHorizontal: 18,
    textAlign: 'center',
    marginTop: 15,
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
});
