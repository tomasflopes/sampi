import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  teamsContainer: {
    flex: 8,
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },

  teamContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  teamNameContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamName: {
    textAlign: 'center',
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: colors.darkGray
  },

  playerContainer: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },

  userName: {
    fontSize: 14,
    marginLeft: 5,
  },

  progressStatusContainer: general.progressStatusContainer,

  progressStatus: general.progressStatus,

  helpTextContainer: general.helpTextContainer,

  helpTextHeader: general.helpTextHeader,

  helpText: general.helpText,

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 2,
    marginBottom: 0,
  },

  backButton: {
    ...general.fullWidthButton,
    backgroundColor: colors.background,
    marginTop: 10,
    marginBottom: 15,
  },

  nextStepButtonText: general.fullWidthButtonText,
});
