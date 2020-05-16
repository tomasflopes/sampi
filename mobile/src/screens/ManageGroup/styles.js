import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  headerText: {
    flex: 1,
    fontSize: 22,
    color: colors.mainBlue,
    textAlign: 'center',
    marginTop: 10,
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

  submitButton: general.fullWidthButton,

  submitButtonText: general.fullWidthButtonText,

  otherMembersButton: {
    flex: .5,
    alignItems: 'center',
  },

  otherMembersButtonText: {
    textDecorationLine: 'underline',
    color: colors.highlightYellow,
    fontSize: 18,
  },
});
