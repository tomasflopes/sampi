import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Invite Friends</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Create Game</Text></TouchableOpacity>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  title: {
    fontSize: 32,
    color: '#00f',
    textAlign: 'center',
    marginTop: 50,
  },

  divider: {
    marginTop: 100,
    height: 1,
    backgroundColor: '#000000',
  },

  button: {
    backgroundColor: '#2e00ff',
    flex: .2,
    marginTop: 10,
  },

  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 32,
  },
});

