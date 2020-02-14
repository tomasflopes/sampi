import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function LeaderBoard({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
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
