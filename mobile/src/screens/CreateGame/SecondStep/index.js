import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import styles from './styles';

import api from '../../../services/api';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';
import { generateHeaders } from '../../../utils';

export default function SecondStep({ navigation }) {
  const { setActiveStep, step, nPlayers, setPlayersArrayState } = useContext(CreateGameContext);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  async function loadPlayersAvatar() {
    const headers = await generateHeaders();

    const response = await api.get('/group', headers);

    setPlayers(response.data.players);
  }

  function handleNextStepClick() {
    if (selectedPlayers.length === nPlayers) { //! TEST VALUE CHANGE TO nPlayers * 2
      setPlayersArrayState(selectedPlayers);
      navigation.navigate('ThirdStep');
    } else {
      Alert.alert('Error', "You haven't selected the same amount of players that you indicated earlier!");
    }
  }

  const handlePlayerAvatarClick = React.useCallback(
    player => () => {
      setSelectedPlayers(selectedPlayers =>
        selectedPlayers.includes(player)
          ? selectedPlayers.filter(p => p !== player)
          : [...selectedPlayers, player]
      ), []
    }
  );

  const Player = React.memo(function Player({
    player,
    isSelected,
    handlePlayerAvatarClick,
  }) {
    const r = React.useRef(0);
    r.current++;
    return (
      <TouchableOpacity
        key={player._id}
        style={styles.userAvatarContainer}
        onPress={handlePlayerAvatarClick(player)}
      >
        {isSelected ? (
          <ImageBackground
            source={{
              uri: player.avatar_url
            }}
            style={styles.userAvatar}
            imageStyle={{ borderRadius: 55 / 2 }}
          >
            <Image
              source={require('../../../../assets/selectedOverlay.png')}
              style={styles.activeOverlay}
            />
          </ImageBackground>
        ) : (
            <>
              <Image
                source={{
                  uri: player.avatar_url
                }}
                style={styles.userAvatar}
              />
              <Text style={styles.playerName}>{player.name.split(' ')[0]}</Text>
            </>
          )
        }
      </TouchableOpacity >
    );
  });

  useEffect(() => {
    loadPlayersAvatar();
    setActiveStep(1);
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CREATE GAME</Text>
      </View>

      <View style={styles.playerPhotos}>
        {players.map(player =>
          (
            <Player
              key={player._id}
              player={player}
              isSelected={selectedPlayers.includes(player)}
              handlePlayerAvatarClick={handlePlayerAvatarClick}
            />
          )
        )}
      </View>

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>Pick the players</Text>
        <Text style={styles.helpText}>Select the players that will play the game to get the random teams</Text>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={step} />
        </View>
      </View>

      <TouchableOpacity style={styles.nextStepButton} onPress={handleNextStepClick}>
        <Text style={styles.nextStepButtonText}>Next Step</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => {
        setActiveStep(0);
        navigation.goBack();
      }}>
        <Text style={styles.nextStepButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
