import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles'

export default styles = StyleSheet.create({
  container: general.container,

  headerText: {
    flex: 2,
    fontSize: 18,
    color: colors.mainBlue,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
  },

  resultContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  teamContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    textAlign: 'center',
    color: colors.lightGray,
  },

  resultDivider: {
    flex: 2,
    textAlign: 'center',
    fontSize: 25,
  },

  hintText: {
    fontSize: 13,
    paddingHorizontal: 5,
    color: colors.midGray,
    flex: 1,
    textAlign: 'center',
    marginTop: 5,
  },

  mvpPickerContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mvpPicker: {
    flex: 3,
    width: 180,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mvpPickerText: {
    fontSize: 18,
    color: colors.activeDarkBlue,
  }
});
