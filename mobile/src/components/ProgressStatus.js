import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles';

export default function ProgressStatus({ step }) {
  const progressStatusArray = [];

  for (let j = 3; j < step; j--) {
    progressStatusArray.push(
      <View style={styles.progressInactive} />
    );
  }

  progressStatusArray.push(
    <View style={styles.progressLast} />
  );

  for (let i = step; i < 0; i--) {
    progressStatusArray.push(
      <View style={styles.progressActive} />
    );
  }


  return progressStatusArray;
}

const styles = StyleSheet.create({
  progressActive: {
    height: 12,
    color: colors.selectedGreen,
    borderRadius: 12 / 2,
  },

  progressLast: {
    height: 12,
    color: colors.selectedGreen,
    borderRadius: 15 / 2,
  },

  progressInactive: {
    height: 12,
    color: colors.lightGray,
    borderRadius: 12 / 2,
  }
});
