import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import TopBar from '../../components/TopBar';

import { generateHeaders } from '../../utils';

import api from '../../services/api';

import styles from './styles';

export default function OtherGroupMembers({ navigation }) {
  const [players, setPlayers] = useState([]);

  async function getData() {
    const headers = await generateHeaders();

    const response = await api.get('/group', headers);

    setPlayers(response.data.players);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <Text style={styles.header}>Group Members</Text>
      <View style={styles.playersContainer}>
        {players.map(player => (
          <View key={player._id} style={styles.playerContainer}>
            <Image
              style={styles.playerPhoto}
              source={{
                uri: player.avatar_url
              }}
            />
            <Text style={styles.playerName}>{player.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
