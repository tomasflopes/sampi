import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  spacer: {
    flex: .1
  },

  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },

  formContainer: {
    flex: 4,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flex: 1,
    marginBottom: 5,
  },

  formPicker: {
    color: colors.darkGray,
    flex: 2,
  },

  formPickerContainer: {
    flex: 1,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderColor: colors.lightGray,
  },

  dateHeader: {
    fontSize: 15,
    marginBottom: 5,
    color: colors.darkGray,
  },

  shareSpace: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },

  shareButton: {
    ...general.smallButton,
    marginHorizontal: 10,
  },

  shareIcon: {
    fontSize: 30,
    color: colors.mainBlue,
  },

  shareText: {
    left: 2,
    color: colors.mainBlue,
    fontSize: 14,
  },

  progressStatusContainer: general.progressStatusContainer,

  progressStatus: general.progressStatus,

  helpTextContainer: general.helpTextContainer,

  helpText: general.helpText,

  helpTextHeader: general.helpTextHeader,

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 1.5,
    marginTop: 10,
    marginBottom: 0,
  },

  nextStepButtonText: general.fullWidthButtonText,

  backButton: {
    ...general.fullWidthButton,
    flex: 1.5,
    backgroundColor: colors.background,
    marginTop: 0,
    marginBottom: 0,
  },

  backButtonText: {
    ...general.fullWidthButtonText,
  }
})
