import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Form } from '@unform/mobile';
import { Dropdown } from 'react-native-material-dropdown';

import api from '../../../services/api';

import Input from '../../../components/Input';

import styles from './styles';

export default function SignUp({ navigation }) {
  const formRef = useRef(null);

  const [gender, setGender] = useState('');

  const [birthdayDay, setBirthdayDay] = useState(0);
  const [birthdayMonth, setBirthdayMonth] = useState(0);
  const [birthdayYear, setBirthdayYear] = useState(0);

  async function handleSubmit(data) {
    console.log(data);
    console.log(gender);
    /* const response = await api.post('/api/user/register', {
      email,
      password,
      //? missing fields
    })
      .catch(() => {
        //? Error in validation
      });

    if (response) {
      //? Valid data
    } */
  }

  const genders = [{
    value: 'Male',
  }, {
    value: 'Female',
  }];

  const days = [{
    value: 'Male',
  }, {
    value: 'Female',
  }];

  const months = [{
    value: 'January',
  }, {
    value: 'Female',
  }];

  const years = [{
    value: 'Male',
  }, {
    value: 'Female',
  }];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logoEscuro.png')}
        />
      </View>

      <View style={styles.formContainer}>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="name" label="NAME" type="name" />
          <Input name="email" label="EMAIL" type="email" />
          <Dropdown
            label='GENDER'
            data={genders}
            onChangeText={(value) => {
              setGender(value);
            }}
          />
          <View style={styles.birthdayRow}>
            <Dropdown
              label='DAY'
              data={days}
              onChangeText={(value) => {
                setBirthdayDay(value);
              }}
            />

            <Dropdown
              label='MONTH'
              data={months}
              onChangeText={(value) => {
                setBirthdayMonth(value);
              }}
            />

            <Dropdown
              label='YEAR'
              data={years}
              onChangeText={(value) => {
                setBirthdayYear(value);
              }}
            />
          </View>
          <Input name="position" label="PHONE" type="number" />
          <Input name="position" label="POSITION" type="text" />
          <Input name="password" label="PASSWORD" type="password" />
        </Form>
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
        <Text style={styles.simpleSignUpText}>New to Sampi? </Text>
        <TouchableOpacity
          style={styles.signUpClickable}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text style={styles.clickableSignUpText}>Sign In!</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}
