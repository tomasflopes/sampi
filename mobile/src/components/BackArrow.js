import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { colors } from '../styles';

export default function BackArrow({ navigation }) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.goBack();
    }}>
      <Icon style={styles.backArrowIcon} name="arrow-left"></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backArrowIcon: {
    color: colors.lightGray,
    fontSize: 42,
  }
})
