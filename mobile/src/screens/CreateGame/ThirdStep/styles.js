import { StyleSheet } from 'react-native';

import { general } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  progressStatusContainer: general.progressStatusContainer,

  progressStatus: general.progressStatus,

  helpTextContainer: general.helpTextContainer,

  helpTextHeader: general.helpTextHeader,

  helpText: general.helpText,

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 2,
  },

  backButton: {
    ...general.fullWidthButton,
    backgroundColor: colors.background,
    marginTop: 10,
    marginBottom: 15,
  },

  nextStepButtonText: general.fullWidthButtonText,
});
