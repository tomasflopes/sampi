import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNavbar({ active, navigation }) {
  return (
    <View style={styles.holder}>
      <TouchableOpacity style={active === 'Profile' ? styles.logoClickableActive : styles.logoClickable} onPress={() => navigation.navigate('Profile')}>
        <Icon style={active === 'Profile' ? styles.logoActive : styles.logo} name="user"></Icon>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={active === 'Home' ? styles.logoClickableActive : styles.logoClickable} onPress={() => navigation.navigate('Home')}>
        <Icon style={active === 'Home' ? styles.logoActive : styles.logo} name="home"></Icon>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={active === 'LeaderBoard' ? styles.logoClickableActive : styles.logoClickable} onPress={() => navigation.navigate('LeaderBoard')}>
        <Icon style={active === 'LeaderBoard' ? styles.logoActive : styles.logo} name="list-ol"></Icon>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoClickable: {
    flex: 1,
  },

  spacer: {
    flex: .2,
  },

  logo: {
    fontSize: 48,
    color: '#23354c',
    textAlign: 'center',
  },

  logoClickableActive: {
    bottom: 5,
  },

  logoActive: {
    fontSize: 52,
    color: '#23354c',
    textAlign: 'center',
  }
})
