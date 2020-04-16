import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function BackArrow({ navigation }) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.goBack();
    }}>
      <Icon style={styles.backArrowIcon} name="arrow-back"></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backArrowIcon: {
    color: '#ff0',
    fontSize: 42,
  }
})
