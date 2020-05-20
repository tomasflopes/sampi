import colors from './colors';

export default container = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  smallButton: {
    flex: 1,
    width: 120,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
  },

  fullWidthButton: {
    flex: 1,
    marginTop: 25,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonsLightBlue,
  },

  fullWidthButtonText: {
    flex: 1,
    alignItems: 'center',
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: 'center',
    fontSize: 25,
    color: colors.mainBlue,
  },

  screenTitleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
  },

  screenTitle: {
    fontSize: 15,
    color: colors.activeDarkBlue,
    fontWeight: 'normal',
  },
}
