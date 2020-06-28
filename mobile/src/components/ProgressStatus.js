import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles';

export default function ProgressStatus({ step }) {
  const progressStatusArray = [];

  for (let i = step; i > 0; i--) {
    progressStatusArray.push(<View key={i} style={styles.progressActive} />);
  }

  progressStatusArray.push(<View key={5} style={styles.progressLast} />);

  for (let j = 3; j > step; j--) {
    progressStatusArray.push(<View key={j} style={styles.progressInactive} />);
  }

  return progressStatusArray;
}

const styles = StyleSheet.create({
  progressActive: {
    height: 12,
    width: 12,
    backgroundColor: colors.selectedGreen,
    borderRadius: 12 / 2,
  },

  progressLast: {
    height: 15,
    width: 15,
    backgroundColor: colors.selectedGreen,
    borderRadius: 15 / 2,
  },

  progressInactive: {
    height: 12,
    width: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 12 / 2,
  },
});
