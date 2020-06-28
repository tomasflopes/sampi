import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  nPlayerPickerContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pickerText: {
    color: colors.darkGray,
    textAlign: 'center',
    fontSize: 15,
  },

  nPlayerPicker: {
    width: 100,
    left: 20,
  },

  teamFormationMode: {
    flex: 5,
    flexDirection: 'row',
  },

  teamFormationModeButton: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamFormationModeTextContainer: {
    flex: 1,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonsBlue,
  },

  teamFormationModeTextContainerActive: {
    flex: 1,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: colors.selectedGreen,
  },

  teamFormationModeHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: colors.mainBlue,
  },

  teamFormationModeText: {
    flex: 4,
    color: colors.darkGray,
    textAlign: 'center',
    marginTop: 12,
  },

  helpTextContainer: general.helpTextContainer,

  helpTextHeader: general.helpTextHeader,

  helpText: general.helpText,

  comingSoonText: {
    fontSize: 15,
    color: colors.logoutRed,
    textAlign: 'center',
    marginTop: 5,
  },

  progressStatusContainer: general.progressStatusContainer,

  progressStatus: general.progressStatus,

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 2,
  },

  nextStepButtonText: general.fullWidthButtonText,
});
