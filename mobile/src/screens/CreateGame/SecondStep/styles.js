import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  playerPhotos: {
    flex: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  userAvatarContainer: {
    width: 75,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
  },

  activeOverlay: {
    width: 55,
    height: 55,
    opacity: .8,
    borderRadius: 55 / 2,
    backgroundColor: colors.buttonsLightBlue
  },

  userAvatar: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },

  playerName: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },

  helpTextContainer: {
    marginTop: 15,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  helpTextHeader: {
    color: colors.black,
    fontSize: 22,
    textAlign: 'center',
  },

  helpText: {
    color: colors.midGray,
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },

  progressStatusContainer: {
    flex: .8,
    alignItems: 'center',
  },

  progressStatus: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
  },

  helpTextContainer: {
    marginTop: 15,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  helpTextHeader: {
    color: colors.black,
    fontSize: 22,
    textAlign: 'center',
  },

  helpText: {
    color: colors.midGray,
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },

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

  nextStepButtonText: general.fullWidthButtonText
});
