import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './styles';

import UpdateContext from '../../contexts/update';

import TopBar from '../../components/TopBar';

import api from '../../services/api';
import { generateHeaders } from '../../utils';

export default function FinishGame({ navigation }) {
  const { updateState } = useContext(UpdateContext);

  const [isVisibleTeamA, setIsVisibleTeamA] = useState(false);
  const [isVisibleTeamB, setIsVisibleTeamB] = useState(false);
  const [isVisibleMvp, setIsVisibleMvp] = useState(false);

  const [resultTeamA, setResultTeamA] = useState(0);
  const [resultTeamB, setResultTeamB] = useState(0);

  const [mvp, setMvp] = useState({});

  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  function toggleIsVisibleTeamA() {
    setIsVisibleTeamA(!isVisibleTeamA);
  }

  function toggleIsVisibleTeamB() {
    setIsVisibleTeamB(!isVisibleTeamB);
  }

  function toggleIsVisibleMvp() {
    setIsVisibleMvp(!isVisibleMvp);
  }

  async function confirmFinish() {
    const headers = await generateHeaders();

    const result = `${resultTeamA}-${resultTeamB}`;

    api
      .put(
        '/game',
        {
          mvp,
          result,
        },
        headers
      )
      .catch(error => {
        console.log(error);
        Alert.alert('Error', error.response.data[0].message);
      })
      .then(() => {
        Alert.alert(
          'Success',
          `You have finished the game with the result of ${result}`
        );
        updateState();
        navigation.goBack();
      });
  }

  async function getData() {
    const headers = await generateHeaders();

    const response = await api.get('/game', headers);

    setTeamA(response.data.teamA);
    setTeamB(response.data.teamB);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />

      <Modal
        visible={isVisibleTeamA}
        onDismiss={toggleIsVisibleTeamA}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Team A</Text>
          <View style={styles.playersContainer}>
            {teamA.map(player => (
              <View style={styles.playerContainer}>
                <Image
                  source={{
                    uri: player.avatar_url,
                  }}
                  style={styles.playerPhoto}
                />
                <Text style={styles.playerName}>{player.name}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={toggleIsVisibleTeamA}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        visible={isVisibleTeamB}
        onDismiss={toggleIsVisibleTeamB}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Team B</Text>
          <View style={styles.playersContainer}>
            {teamB.map(player => (
              <View style={styles.playerContainer}>
                <Image
                  source={{
                    uri: player.avatar_url,
                  }}
                  style={styles.playerPhoto}
                />
                <Text style={styles.playerName}>{player.name}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={toggleIsVisibleTeamB}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        visible={isVisibleMvp}
        onDismiss={toggleIsVisibleTeamA}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>MVP</Text>
          <View style={styles.playersContainer}>
            {[...teamA, ...teamB].map(player => (
              <TouchableOpacity
                style={styles.playerContainer}
                onPress={() => {
                  setMvp(player);
                  toggleIsVisibleMvp();
                }}
              >
                <Image
                  source={{
                    uri: player.avatar_url,
                  }}
                  style={styles.playerPhoto}
                />
                <Text style={styles.playerName}>{player.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={toggleIsVisibleMvp}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.headerText}>
        So... Your game has finished. Please, tell me how did it went?..
      </Text>

      <View style={styles.resultContainer}>
        <View style={styles.teamContainer}>
          <TouchableOpacity
            style={styles.teamNameContainer}
            onPress={toggleIsVisibleTeamA}
          >
            <Text style={styles.teamNameText}>Team A</Text>
          </TouchableOpacity>
          <View style={styles.teamResultContainer}>
            <TextInput
              style={styles.teamResultText}
              placeholder='0'
              onChangeText={value => setResultTeamA(value)}
              keyboardType='number-pad'
            />
          </View>
        </View>

        <Text style={styles.resultDivider}>x</Text>

        <View style={styles.teamContainer}>
          <TouchableOpacity
            style={styles.teamNameContainer}
            onPress={toggleIsVisibleTeamB}
          >
            <Text style={styles.teamNameText}>Team B</Text>
          </TouchableOpacity>
          <View style={styles.teamResultContainer}>
            <TextInput
              style={styles.teamResultText}
              placeholder='0'
              onChangeText={value => setResultTeamB(value)}
              keyboardType='number-pad'
            />
          </View>
        </View>
      </View>

      <Text style={styles.hintText}>
        Hint: You can tap the team name to show the players list
      </Text>

      <View style={styles.mvpPickerContainer}>
        <TouchableOpacity style={styles.mvpPicker} onPress={toggleIsVisibleMvp}>
          {Object.keys(mvp).length > 0 ? (
            <>
              <Image
                source={{
                  uri: mvp.avatar_url,
                }}
                style={[styles.playerPhoto, { height: 40, width: 40 }]}
              />
              <Text style={styles.mvpPickerText}>{mvp.name.split(' ')[0]}</Text>
            </>
          ) : (
            <>
              <Image
                style={styles.mvpStart}
                source={require('../../../assets/mvpStar.png')}
              />
              <Text style={styles.mvpPickerText}>Pick MVP</Text>
              <Image
                style={styles.mvpStart}
                source={require('../../../assets/mvpStar.png')}
              />
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.noteText}>Note: This step is optional</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={confirmFinish}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
