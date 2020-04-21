import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#eee',
  },

  logoContainer: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    height: 125,
    width: 125,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flex: 2,
  },

  text: {
    fontSize: 20,
  },

  formContainer: {
    flex: 4,
  },

  buttonSignIn: {
    flex: 1,
    marginTop: 25,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },

  buttonText: {
    flex: 1,
    alignItems: 'center',
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: 'center',
    fontSize: 25,
    color: '#1e2a40',
  },
});
