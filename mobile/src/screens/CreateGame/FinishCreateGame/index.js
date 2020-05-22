import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Share } from 'react-native';

import { Picker } from '@react-native-community/picker';

import { Form } from '@unform/mobile';
import Input from '../../../components/Input';
import ProgressStatus from '../../../components/ProgressStatus';

import api from '../../../services/api';
import { generateHeaders } from '../../../utils/';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import monthDays from 'month-days';

import styles from './styles';

export default function FinishCreateGame({ navigation }) {
  const [location, setLocation] = useState('');

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const [eventDay, setEventDay] = useState('');
  const [eventMonth, setEventMonth] = useState('');
  const [eventYear, setEventYear] = useState('');

  const shareMessage = location === '' ? `Hello, we're having an event day ${eventDay}/${eventMonth}/${eventYear}, make sure you attend this one!` : `Hello, we're having an event in ${location}, day ${eventDay}/${eventMonth}/${eventYear}, make sure you attend this one!`;

  function populateYears() {
    const years = ['YEAR'];

    for (let i = 1; i < 120; i++) {
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

  const formRef = useRef(null);

  async function handleSubmit({ location }) {
    const headers = await generateHeaders();

    const response = await api.post('/game', {

    }, headers);

    console.log(response);
  }

  function handleNextStepClick() {

  }

  async function handleShare() {
    try {
      await Share.share({
        message: shareMessage,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  function handleSMS() {

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
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="location" label="Location" type="location" />
        </Form>
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
          <Icon style={styles.shareIcon} name="share" />
          <Text style={styles.shareText}>Message everyone</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressStatusContainer}>
        <View style={styles.progressStatus}>
          <ProgressStatus step={4} />
        </View>
      </View>

      <TouchableOpacity style={styles.nextStepButton} onPress={handleNextStepClick}>
        <Text style={styles.nextStepButtonText}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => {
        navigation.goBack();
      }}>
        <Text style={styles.nextStepButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
