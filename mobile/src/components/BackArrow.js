import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BackArrow({ navigateTo, navigation }) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate(navigateTo)
    }}>
      <Icon style={styles.backArrowIcon} name="arrow-left"></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backArrowIcon: {
    color: '#ff0',
    fontSize: 42,
  }
})
