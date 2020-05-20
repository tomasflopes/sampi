import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

import api from '../../../services/api';
import { generateHeaders } from '../../../utils';

export default function ThirdStep({ navigation }) {
  function handleNextStep() {
    navigation.navigate('FinishCreateGame');
  }

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

      <TouchableOpacity style={styles.nextStepButton} onPress={handleNextStep}>
        <Text style={styles.nextStepButtonText}>Next Step</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => {
        navigation.goBack();
      }}>
        <Text style={styles.nextStepButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
