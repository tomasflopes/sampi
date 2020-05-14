import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import styles from './styles';

import UpdateContext from '../../contexts/update';

import { generateHeaders } from '../../utils'

import api from '../../services/api';

export default function Home({ navigation }) {
  const { update } = useContext(UpdateContext);
  const [hasGroup, setHasGroup] = useState(false);

  async function setUserGroupState() {
    const headers = await generateHeaders()

    const response = await api.get('/group', headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      })

    const flag = response.data[0] ? true : false;

    setHasGroup(flag);
  }

  useEffect(() => {
    setUserGroupState();
  }, [update])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logoDark.png')}
        />
      </View>
      <View style={styles.divider}>
        <Text style={styles.cards}>cards</Text>
      </View>
      <View style={styles.spacer} />
      {hasGroup ? (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonInvite}
            onPress={() => navigation.navigate('Invite')}
          >
            <Text style={styles.buttonText}>
              Invite Friends
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={() => { navigation.navigate('CreateGame') }}
          >
            <Text style={styles.buttonText}>
              Create Game
          </Text>
          </TouchableOpacity>
        </View>

      ) : ( //? Doesn't have group

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonInvite}
              onPress={() => navigation.navigate('JoinGroup')}
            >
              <Text style={styles.buttonText}>
                Join Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCreate}
              onPress={() => { navigation.navigate('CreateGroup') }}
            >
              <Text style={styles.buttonText}>
                Create Group
              </Text>
            </TouchableOpacity>
          </View>
        )}
      <View style={styles.spacer} />
    </View>
  )
}
