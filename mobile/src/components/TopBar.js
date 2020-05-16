import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import BackArrow from './BackArrow';

import { metrics, colors } from '../styles';

export default function TopBar({ navigation }) {
  return (
    <View style={styles.topBar} >
      <View style={styles.backArrowHolder}>
        <BackArrow navigation={navigation} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logoBright.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: metrics.topBarHeight,
    backgroundColor: colors.activeDarkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backArrowHolder: {
    flex: .5,
    marginLeft: 5,
  },

  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
})
