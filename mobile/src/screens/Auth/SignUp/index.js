import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { Dropdown } from 'react-native-material-dropdown';

import monthDays from 'month-days';

import api from '../../../services/api';

import Input from '../../../components/Input';

import { colors } from '../../../styles';

import styles from './styles';

export default function SignUp({ navigation }) {
  const formRef = useRef(null);

  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const [birthdayDay, setBirthdayDay] = useState(0);
  const [birthdayMonth, setBirthdayMonth] = useState(0);
  const [birthdayYear, setBirthdayYear] = useState(0);

  async function handleSubmit({ email, name, password, phone }) {
    const birth = `${birthdayMonth}-${birthdayDay}-${birthdayYear}`;

    const response = await api.post('/api/user/register', {
      name,
      email,
      password,
      birth,
      gender,
      phone,
      position
    })
      .catch((error) => {
        console.log(error.response);
        Alert.alert("Error", error.response.details[0].message);
      });

    if (response) {
      navigation.navigate('SignIn');
    }
  }

  function populateYears() {
    //! Change this function to update by scroll event
    let years = []
    for (let i = 0; i < 120; i++) {
      years[i] = { value: new Date().getFullYear() - i };
    }

    return years;
  }

  useEffect(() => {
    const days = monthDays({
      month: birthdayMonth - 1,
      year: parseInt(birthdayYear) || new Date().getFullYear(),
    });

    let daysArray = [];

    for (let i = 0; i < days; i++) {
      daysArray[i] = { value: i + 1 };
    }

    setDaysOfMonth(daysArray);
  }, [birthdayMonth, birthdayYear]);

  const genders = [{
    value: 'Male',
  }, {
    value: 'Female',
  }];

  const months = [{
    value: 1,
  }, {
    value: 2,
  }, {
    value: 3,
  }, {
    value: 4,
  }, {
    value: 5,
  }, {
    value: 6,
  }, {
    value: 7,
  }, {
    value: 8,
  }, {
    value: 9,
  }, {
    value: 10,
  }, {
    value: 11,
  }, {
    value: 12,
  }];

  const positions = [{
    value: 'Goalkeeper',
  }, {
    value: 'Defender',
  }, {
    value: 'Midfielder',
  }, {
    value: 'Forward',
  }];

  const years = populateYears();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logoEscuro.png')}
        />
      </View>

      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input name="name" label="NAME" type="name" />
            <Input name="email" label="EMAIL" type="email" />
            <Dropdown
              label='GENDER'
              containerStyle={[styles.dropDown, { paddingHorizontal: 0 }]}
              baseColor={colors.darkGray}
              textColor={'#000'}
              data={genders}
              onChangeText={(value) => {
                setGender(value);
              }}
            />
            <View style={styles.birthdayRow}>
              <Dropdown
                label='MONTH'
                baseColor={colors.darkGray}
                style={styles.dropDown}
                data={months}
                onChangeText={(value) => {
                  setBirthdayMonth(value);
                }}
              />

              <Dropdown
                label='DAY'
                baseColor={colors.darkGray}
                style={styles.dropDown}
                data={daysOfMonth}
                onChangeText={(value) => {
                  setBirthdayDay(value);
                }}
              />

              <Dropdown
                label='YEAR'
                baseColor={colors.darkGray}
                textColor={'#000'}
                style={styles.dropDown}
                data={years}
                onChangeText={(value) => {
                  setBirthdayYear(value);
                }}
              />
            </View>
            <Input name="phone" label="PHONE" type="text" />
            <Dropdown
              label='POSITION'
              containerStyle={[styles.dropDown, { paddingHorizontal: 0 }]}
              baseColor={colors.darkGray}
              textColor={'#000'}
              data={positions}
              onChangeText={(value) => {
                setPosition(value);
              }}
            />
            <Input name="password" label="PASSWORD" type="password" />
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText} >
          Sign Up!
        </Text>
      </TouchableOpacity>

      <View style={styles.signUpTextContainer}>
        <Text style={styles.simpleSignUpText}>Already have an account? </Text>
        <TouchableOpacity
          style={styles.signUpClickable}
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <Text style={styles.clickableSignUpText}>Sign In!</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}
