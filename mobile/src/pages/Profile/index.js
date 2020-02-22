import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles';

export default function Profile({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}
