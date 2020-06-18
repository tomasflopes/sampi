import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

import { Picker } from '@react-native-community/picker';

import HelpButton from '../../../components/HelpButton';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

export default function FirstStep({ navigation }) {
  const [nPlayers, setNPlayers] = useState(3);
  const [selected, setSelected] = useState(null);

  const { setSelectionMode, setNPlayersState } = useContext(CreateGameContext);

  const nPlayersArray = [
    '3 x 3',
    '4 x 4',
    '5 x 5',
    '6 x 6',
    '7 x 7',
  ];

  function handleTeamModeChange(mode) {
    setSelected(mode);
  }

  function handleNextClick() {
    if (selected != null) {
      setSelectionMode(selected);
      setNPlayersState(nPlayers);
      navigation.navigate('SecondStep');
    } else {
      Alert.alert('Error', 'You must select a team selection method!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CREATE GAME</Text>
      </View>

      <View style={styles.nPlayerPickerContainer}>
        <Text style={styles.pickerText}>Number Of Players</Text>
        <Picker
          selectedValue={nPlayers}
          style={styles.nPlayerPicker}
          onValueChange={itemValue => setNPlayers(itemValue)}
          mode="dialog"
        >
          {
            nPlayersArray.map((item, index) => {
              return (
                <Picker.Item key={index} label={item} value={item.split('')[0]} />
              );
            })
          }
        </Picker>
      </View>

      <View style={styles.teamFormationMode}>
        <TouchableOpacity
          style={styles.teamFormationModeButton}
          onPress={() => handleTeamModeChange(0)}
        >
          <View style={selected === 0 ? styles.teamFormationModeTextContainerActive : styles.teamFormationModeTextContainer}>
            <Text style={styles.teamFormationModeHeaderText}>RANDOM</Text>
          </View>
          <Text style={styles.teamFormationModeText}>On this mode the team selection will be completely random.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.teamFormationModeButton, { opacity: .4, backgroundColor: '#ccc' }]}
        >
          <View style={selected === 1 ? styles.teamFormationModeTextContainerActive : styles.teamFormationModeTextContainer}>
            <Text style={styles.teamFormationModeHeaderText}>DRAFT</Text>
          </View>
          <Text style={styles.comingSoonText}>COMING SOON</Text>
          <Text style={[styles.teamFormationModeText, { marginTop: 1 }]}>On this mode the teams will be picked by two captains, randomly picked by the app.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>Pick the mode of selection</Text>
        <Text style={styles.helpText}>This is the mode that the teams will be selected.</Text>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={0} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextStepButton}
        onPress={handleNextClick}
      >
        <Text style={styles.nextStepButtonText}>Next Step</Text>
      </TouchableOpacity>
      <HelpButton
        flex={.2}
        text="Here you will be able to setup your next game. We will be walking through a set of
        steps that will help you configure every aspect of the game. In the end you can share the
        details with everyone in the group in order to facilitate the communication!"
      />
    </View >
  );
}
