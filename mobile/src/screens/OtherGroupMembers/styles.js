import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  header: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.mainBlue,
    marginTop: 10,
  },

  playersContainer: {
    flexGrow: .1,
  },

  playersContainerContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  playerContainer: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  playerPhoto: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
  },

  playerName: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    color: colors.mainBlue
  }
});
