import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
  },

  title: {
    fontSize: 15,
    color: colors.activeDarkBlue,
    fontWeight: 'normal',
  },

  playerPhotoAndLabel: {
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

  photoLabel: {
    fontSize: 14,
    color: colors.highlightYellow
  },

  formContainer: {
    flex: 4,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 25,
  },

  buttonConfirm: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonsLightBlue,
    marginBottom: 5,
  },

  buttonText: {
    flex: 1,
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: 'center',
    fontSize: 25,
    color: colors.mainBlue,
  },
});
