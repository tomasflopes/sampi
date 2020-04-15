import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

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
