import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';
import styles from './styles';

import UpdateContext from '../../contexts/update';

import { generateHeaders } from '../../utils'

import api from '../../services/api';

export default function Home({ navigation }) {
  const { update } = useContext(UpdateContext);
  const [hasGroup, setHasGroup] = useState(false);
  const [hasActiveGame, setHasActiveGame] = useState(false);
  const [lastResult, setLastResult] = useState('');

  async function setUserGroupState() {
    const headers = await generateHeaders()

    const response = await api.get('/group', headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      })

    if (response.data) {
      setHasGroup(true);
      return;
    }

    setHasGroup(false);
  }

  async function checkForActiveGame() {
    const headers = await generateHeaders();

    const response = await api.get('/game', headers);

    try {
      if (response.data != []) {
        setHasActiveGame(true);
      } else {
        setHasActiveGame(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getLastResult() {
    const headers = await generateHeaders();

    const response = await api.get('/card', headers)
      .catch(error => {
        if (error.response.status === 400) setLastResult(0); return;
      });

    if (response.data._id && !response.data.result) {
      setLastResult(1);
      return;
    }

    if (!response.data.result) {
      setLastResult(0);
      return;
    }

    const resultArray = response.data.result.split('-');

    const result = `${resultArray[0]} - ${resultArray[1]}`;

    setLastResult(result);
  }

  useEffect(() => {
    getLastResult();
    checkForActiveGame();
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
        {
          lastResult === 0 ? (
            <>
              <Text style={styles.cardMessageHeader}>You don't have stats to display yet</Text>
              <Text style={styles.cardMessage}>Join a group and play some games to watch this filled</Text>
            </>
          ) : lastResult === 1 ? (
            <>
              <Text style={styles.cardMessageHeader}>You have a game in progress</Text>
              <Text style={styles.cardMessage}>When you finish it just hit Finish Game and share the results!</Text>
            </>
          ) : (
                <>
                  <Text style={styles.cardsHeader}>LAST RESULT</Text>
                  <View style={styles.teamsContainer}>
                    <View style={styles.teamContainer}>
                      <Image
                        style={styles.teamLogo}
                        source={require('../../../assets/teamABadge.png')}
                      />
                      <Text style={styles.teamName}>TEAM A</Text>
                    </View>
                    <View style={styles.resultContainer}>
                      <Text style={styles.resultText}>{lastResult}</Text>
                    </View>
                    <View style={styles.teamContainer}>
                      <Image
                        style={[styles.teamLogo, { marginBottom: -8, marginTop: 8 }]}
                        source={require('../../../assets/teamBBadge.png')}
                      />
                      <Text style={styles.teamName}>TEAM B</Text>
                    </View>
                  </View>
                </>
              )
        }
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
          {hasActiveGame ? (
            <TouchableOpacity
              style={styles.buttonCreate}
              onPress={() => { navigation.navigate('FinishGame') }}
            >
              <Text style={styles.buttonText}>
                Finish Game
              </Text>
            </TouchableOpacity>
          ) : (
              <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => { navigation.navigate('CreateGame') }}
              >
                <Text style={styles.buttonText}>
                  Create Game
          </Text>
              </TouchableOpacity>
            )
          }
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
