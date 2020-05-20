import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

export default function ThirdStep({ navigation }) {
  const { playersArray } = useContext(CreateGameContext);

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

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>Pick the players</Text>
        <Text style={styles.helpText}>Select the players that will play the game to get the random teams</Text>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={2} />
        </View>
      </View>
    </View>
  );
}
