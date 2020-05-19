import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Picker } from '@react-native-community/picker';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

export default function FirstStep({ navigation }) {
  const [nPlayers, setNPlayers] = useState('');
  const [selected, setSelected] = useState(null);

  const { moveForward, step, setSelectionMode } = useContext(CreateGameContext);

  const nPlayersArray = [
    '3 x 3',
    '4 x 4',
    '5 x 5',
    '6 x 6',
    '7 x 7',
  ];

  function handleNextClick() {
    moveForward();
    navigation.navigate('SecondStep');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EDIT PROFILE INFO</Text>
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
            nPlayersArray.map(item => {
              return (
                <Picker.Item label={item} value={item.split('')[0]} />
              );
            })
          }
        </Picker>
      </View>

      <View style={styles.teamFormationMode}>
        <TouchableOpacity
          style={styles.teamFormationModeButton}
          onPress={() => {
            setSelected(0);
            setSelectionMode(0);
            console.log(teamSelectionMode)
          }}
        >
          <View style={selected === 0 ? styles.teamFormationModeTextContainerActive : styles.teamFormationModeTextContainer}>
            <Text style={styles.teamFormationModeHeaderText}>RANDOM</Text>
          </View>
          <Text style={styles.teamFormationModeText}>On this mode the team selection will be completely random.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.teamFormationModeButton}
          onPress={() => {
            setSelected(1);
            setSelectionMode(1);
            console.log(teamSelectionMode)
          }}
        >
          <View style={selected === 1 ? styles.teamFormationModeTextContainerActive : styles.teamFormationModeTextContainer}>
            <Text style={styles.teamFormationModeHeaderText}>DRAFT</Text>
          </View>
          <Text style={styles.teamFormationModeText}>On this mode the teams will be picked by two captains, randomly picked by the app.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>Pick the mode of selection</Text>
        <Text style={styles.helpText}>This is the mode that the teams will be selected.</Text>
      </View>

      <View style={styles.progressStatusContainer}>
        <ProgressStatus step={step} />
      </View>
      <TouchableOpacity
        style={styles.nextStepButton}
        onPress={handleNextClick}
      >
        <Text style={styles.nextStepButtonText}>Next Step</Text>
      </TouchableOpacity>
    </View >
  );
}
