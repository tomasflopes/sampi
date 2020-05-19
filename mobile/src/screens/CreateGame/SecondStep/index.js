import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import CreateGameContext from '../../../contexts/createGame';

export default function SecondStep({ navigation }) {
  const { moveForward, moveBackwards, step } = useContext(CreateGameContext);

  return (
    <View style={styles.container}>
      <Text>CreateGame 2</Text>
    </View>
  );
}
