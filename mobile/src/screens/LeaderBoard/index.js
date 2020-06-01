import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import { generateHeaders } from '../../utils';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function LeaderBoard({ navigation }) {
  const [games, setGames] = useState([]);

  async function getData() {
    const headers = await generateHeaders();

    const response = await api.get('/games', headers);

    setGames(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.comingSoon}>LeaderBoard Coming Soon</Text>
      <Text style={styles.header}>You Last Results</Text>
      <ScrollView style={styles.gamesHolder}>
        {
          games.map(game => (
            <View style={styles.teamsContainer}>
              <View style={styles.teamContainer}>
                <Image
                  style={styles.teamLogo}
                  source={require('../../../assets/teamABadge.png')}
                />
                <Text style={styles.teamName}>TEAM A</Text>
              </View>
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{game.result}</Text>
              </View>
              <View style={styles.teamContainer}>
                <Image
                  style={[styles.teamLogo, { marginBottom: -8, marginTop: 8 }]}
                  source={require('../../../assets/teamBBadge.png')}
                />
                <Text style={styles.teamName}>TEAM B</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}
