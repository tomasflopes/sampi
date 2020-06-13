import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import { generateHeaders } from '../../utils';
import UpdateContext from '../../contexts/update';

import HelpButton from '../../components/HelpButton';

export default function LeaderBoard() {
  const [games, setGames] = useState([]);
  const { update } = useContext(UpdateContext);

  async function getData() {
    const headers = await generateHeaders();

    const response = await api.get('/games', headers);

    setGames(response.data);
  }

  useEffect(() => {
    getData();
  }, [update]);

  return (
    <View style={styles.container}>
      <View style={styles.comingSoon}>
        <Text style={styles.comingSoonText}>LeaderBoard Coming Soon</Text>
      </View>
      <Text style={styles.header}>You Last Results</Text>
      <ScrollView style={styles.gamesHolder}>
        {
          games.map(game => {
            const results = game.result.split('-');
            const result = `${results[0]} - ${results[1]}`;

            return (
              <View style={styles.teamsContainer}>
                <Text style={[
                  game.gameResult === 'L' ? styles.loose : styles.win,
                  game.gameResult === 'T' ? styles.tie : null
                ]}>{game.gameResult}</Text>
                <View style={styles.teamContainer}>
                  <Image
                    style={styles.teamLogo}
                    source={require('../../../assets/teamABadge.png')}
                  />
                  <Text style={styles.teamName}>TEAM A</Text>
                </View>
                <View style={styles.resultContainer}>
                  <Text style={styles.resultText}>{result}</Text>
                </View>
                <View style={styles.teamContainer}>
                  <Image
                    style={[styles.teamLogo, { marginBottom: -8, marginTop: 8 }]}
                    source={require('../../../assets/teamBBadge.png')}
                  />
                  <Text style={styles.teamName}>TEAM B</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <HelpButton
        text="In this screen you can see all the recent games you've been part of. This way you
        can see who won and lost in order to know how you're performing in the recent times."
      />
    </View >
  )
}
