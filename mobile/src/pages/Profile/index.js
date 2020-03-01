import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles';

import BottomNavbar from '../../components/BottomNavbar'

export default function Profile({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <BottomNavbar navigation={navigation} active={'Profile'} />

    </View>
  )
}
