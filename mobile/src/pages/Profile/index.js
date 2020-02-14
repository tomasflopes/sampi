import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

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

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
