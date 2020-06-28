import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

export default function ThirdStep({ navigation }) {
  const { teams } = useContext(CreateGameContext);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  function handleNextStep() {
    navigation.navigate('FinishCreateGame');
  }

  useEffect(() => {
    if (!teams.teamA[1]) {
      navigation.goBack();
    } else {
      setTeamA(teams.teamA);
      setTeamB(teams.teamB);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CREATE GAME</Text>
      </View>

      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.teamNameContainer}>
            <Text style={styles.teamName}>Team A</Text>
          </View>
          {teamA.map(player => (
            <View style={styles.playerContainer} key={player._id}>
              <Image
                source={{
                  uri: player.avatar_url,
                }}
                style={styles.userAvatar}
              />
              <Text style={styles.userName}>{player.name.split(' ')[0]}</Text>
            </View>
          ))}
        </View>

        <View
          style={[
            styles.teamContainer,
            {
              borderLeftWidth: 1,
              borderLeftColor: '#444',
              alignItems: 'flex-end',
            },
          ]}
        >
          <View style={styles.teamNameContainer}>
            <Text style={styles.teamName}>Team B</Text>
          </View>
          {teamB.map(player => (
            <View style={styles.playerContainer} key={player._id}>
              <Image
                source={{
                  uri: player.avatar_url,
                }}
                style={styles.userAvatar}
              />
              <Text style={styles.userName}>{player.name.split(' ')[0]}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>Here are the teams</Text>
        <Text style={styles.helpText}>
          This are the teams that you will be using your next game!
        </Text>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={2} />
        </View>
      </View>

      <TouchableOpacity style={styles.nextStepButton} onPress={handleNextStep}>
        <Text style={styles.nextStepButtonText}>Next Step</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.nextStepButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
