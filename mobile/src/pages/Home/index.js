import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      <View style={styles.divider}>
        <Text style={styles.cards}>cards</Text>
      </View >
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonInvite}><Text style={styles.buttonText}>Invite Friends</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonCreate}><Text style={styles.buttonText}>Create Game</Text></TouchableOpacity>
      </View>
      <View style={styles.bottomNavbar}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  title: {
    flex: .5,
    fontSize: 32,
    color: '#2f364c',
    textAlign: 'center',
    marginTop: 50,
  },

  divider: {
    marginTop: 30,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: '#23354c',
    borderTopColor: '#23354c',
    flex: 2,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cards: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
  },

  buttonsContainer: {
    flex: 3,
  },

  buttonInvite: {
    flex: 1,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },

  buttonCreate: {
    flex: 1,
    marginTop: 24,
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

  bottomNavbar: {
    flex: 1,
    backgroundColor: 'rgba(145, 184, 255, .2)',
  },
});

