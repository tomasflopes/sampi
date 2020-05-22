import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert, Share, TextInput } from 'react-native';

import { Picker } from '@react-native-community/picker';

import * as SMS from 'expo-sms';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

import api from '../../../services/api';
import { generateHeaders } from '../../../utils/';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import monthDays from 'month-days';

import styles from './styles';

export default function FinishCreateGame({ navigation }) {
  const { playersArray, teams } = useContext(CreateGameContext);
  const [location, setLocation] = useState('');

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const [eventDay, setEventDay] = useState('');
  const [eventMonth, setEventMonth] = useState('');
  const [eventYear, setEventYear] = useState('');

  const shareMessage = location === '' ? `Hello, we're having an event day ${eventDay}/${eventMonth}/${eventYear}, make sure you attend this one!` : `Hello, we're having an event in ${location}, day ${eventDay}/${eventMonth}/${eventYear}, make sure you attend this one!`;

  function populateYears() {
    const years = ['YEAR'];

    for (let i = -2; i < 3; i++) {
      years.push(new Date().getFullYear() - i);
    }

    return years;
  }

  const months = [
    'MONTH',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const years = populateYears();

  async function handleSubmit() {
    const date = `${eventMonth}-${eventDay}-${eventYear}`;

    const headers = await generateHeaders();

    const teamA = teams.teamA.map(player => player._id);
    const teamB = teams.teamB.map(player => player._id);

    await api.post('/game', {
      teamA,
      teamB,
      date,
      location
    }, headers)
      .catch(error => {
        console.log(error.response.data);
        Alert.alert('Error', error.response.data.message);
      })
      .then(res => {
        console.log(res);
      });
  }

  async function handleShare() {
    if (eventDay && eventMonth && eventYear) {
      try {
        await Share.share({
          message: shareMessage,
        });
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Error', "You need to set a date of the event before sharing!");
    }
  }

  async function handleSMS() {
    if (eventDay && eventMonth && eventYear) {
      const recipients = playersArray.map(player => player.phone);

      const { result } = await SMS.sendSMSAsync(
        [...recipients],
        shareMessage
      );

      if (!result) {
        Alert.alert('Error', "Your message couldn't be sent");
      }
    } else {
      Alert.alert('Error', "You need to set a date of the event before sharing!");
    }
  }

  useEffect(() => {
    const days = monthDays({
      month: eventMonth - 1,
      year: parseInt(eventYear) || new Date().getFullYear(),
    });

    let daysArray = ['DAY'];

    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    setDaysOfMonth(daysArray);
  }, [eventMonth, eventYear]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          name="location"
          placeholder="Location"
          placeholderTextColor="#444"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="street-address"
          onChangeText={value => {
            setLocation(value)
          }}
        />

        <Text style={styles.dateHeader}>Date</Text>
        <View style={styles.pickerRow}>
          <View style={[styles.formPickerContainer, { flex: 1.25 }]}>
            <Picker
              selectedValue={eventMonth}
              style={[styles.formPicker, { paddingHorizontal: 65 }]}
              onValueChange={itemValue => itemValue != 'MONTH' ? setEventMonth(itemValue) : null}
            >
              {
                months.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item} value={item} />
                  );
                })
              }
            </Picker>
          </View>

          <View style={styles.spacer} />

          <View style={styles.formPickerContainer}>
            <Picker
              style={styles.formPicker}
              selectedValue={eventDay}
              onValueChange={itemValue => itemValue != 'DAY' ? setEventDay(itemValue) : null}
            >
              {
                daysOfMonth.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item.toString()} value={item} />
                  );
                })
              }
            </Picker>
          </View>

          <View style={styles.spacer} />

          <View style={styles.formPickerContainer}>
            <Picker
              selectedValue={eventYear}
              style={[styles.formPicker, { paddingHorizontal: 52 }]}
              onValueChange={itemValue => itemValue != 'YEAR' ? setEventYear(itemValue) : null}
            >
              {
                years.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item.toString()} value={item} />
                  );
                })
              }
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.helpTextContainer}>
        <Text style={styles.helpTextHeader}>It's all set</Text>
        <Text style={styles.helpText}>You finished your game configuration, just make sure you notify all players, let me help with that.</Text>
      </View>

      <View style={styles.shareSpace}>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Icon style={styles.shareIcon} name="share" />
          <Text style={styles.shareText}>Share it</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSMS} style={styles.shareButton}>
          <Icon style={styles.shareIcon} name="forum" />
          <Text style={styles.shareText}>Notify everyone</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={4} />
        </View>
      </View>

      <TouchableOpacity style={styles.nextStepButton} onPress={handleSubmit}>
        <Text style={styles.nextStepButtonText}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => {
        navigation.goBack();
      }}>
        <Text style={styles.nextStepButtonText}>Back</Text>
      </TouchableOpacity>
    </View >
  );
}
