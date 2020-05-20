import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ThirdStep({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CREATE GAME</Text>
      </View>

      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <Image />
          <Text>Nome</Text>
        </View>
      </View>
    </View>
  );
}
