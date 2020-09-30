import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import { generateHeaders } from '../../utils';
import UpdateContext from '../../contexts/update';

import HelpButton from '../../components/HelpButton';

export default function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const { update } = useContext(UpdateContext);

  async function getData() {
    const headers = await generateHeaders();

    const response = await api.get('/leaderboard', headers);

    setLeaderboard(response.data);
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
      <View style={styles.tableHeader}>
        <Text>POS</Text>
        <Text>NAME</Text>
        <Text>POINTS</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.gamesHolderContent}
        style={styles.gamesHolder}
      >
        {leaderboard.map(player => (
          <View style={styles.playerContainer}>
            <Text style={styles.playerPosition}>{player.position}</Text>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.player.name}</Text>
              <Image
                source={{
                  uri: player.player.avatar_url,
                }}
                style={styles.playerPhoto}
              />
            </View>
            <Text style={styles.playerInfo}>{player.points}</Text>
          </View>
        ))}
      </ScrollView>
      <HelpButton
        flex={0.2}
        text="In this screen you can see all the recent games you've been part of. This way you
        can see who won and lost in order to know how you're performing in the recent times."
      />
    </View>
  );
}
