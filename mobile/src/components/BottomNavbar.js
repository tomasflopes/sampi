import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNavbar({ navigation }) {
  const [active, setActive] = useState(1);
  const screenArray = ['Profile', 'Home', 'LeaderBoard'];

  function handleClick(navigateTo) {
    setActive(navigateTo);
    navigation.navigate(screenArray[navigateTo]);
  }

  return (
    < View style={styles.holder} >
      <TouchableOpacity style={active === 0 ? styles.logoClickableActive : styles.logoClickable} onPress={() => handleClick(0)}>
        <Icon style={active === 0 ? styles.logoActive : styles.logo} name="user"></Icon>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={active === 1 ? styles.logoClickableActive : styles.logoClickable} onPress={() => handleClick(1)}>
        <Icon style={active === 1 ? styles.logoActive : styles.logo} name="home"></Icon>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={active === 2 ? styles.logoClickableActive : styles.logoClickable} onPress={() => handleClick(2)}>
        <Icon style={active === 2 ? styles.logoActive : styles.logo} name="list-ol"></Icon>
      </TouchableOpacity>
    </View >
  );
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
