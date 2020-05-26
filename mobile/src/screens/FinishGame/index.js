import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import TopBar from '../../components/TopBar';

import api from '../../services/api';

export default function FinishGame({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <Modal visible={isVisible}>

      </Modal>

      <Text style={styles.headerText}>So... Your game has finished. Please, tell me how did it went?..</Text>

      <View style={styles.resultContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.teamNameContainer}>
            <Text style={styles.teamNameText}>Team A</Text>
          </View>
          <View style={styles.teamResultContainer}>
            <Text style={styles.teamResultText}>0</Text>
          </View>
        </View>

        <Text style={styles.resultDivider}>x</Text>

        <View style={styles.teamContainer}>
          <View style={styles.teamNameContainer}>
            <Text style={styles.teamNameText}>Team B</Text>
          </View>
          <View style={styles.teamResultContainer}>
            <Text style={styles.teamResultText}>0</Text>
          </View>
        </View>
      </View>

      <Text style={styles.hintText}>Hint: You can tap the team name to show the players list</Text>

      <View style={styles.mvpPickerContainer}>
        <TouchableOpacity style={styles.mvpPicker}>
          <Image
            style={styles.mvpStart}
            source={require('../../../assets/mvpStar.png')}
          />
          <Text style={styles.mvpPickerText}>Pick MVP</Text>
          <Image
            style={styles.mvpStart}
            source={require('../../../assets/mvpStar.png')}
          />
        </TouchableOpacity>
        <Text style={styles.noteText}>Note: This step is optional</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
