import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

import BottomNavbar from '../../components/BottomNavbar'

export default function LeaderBoard({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <BottomNavbar navigation={navigation} active={'LeaderBoard'} />

    </View>
  )
}
