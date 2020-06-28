import React, { useRef, useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage,
  Alert,
  Modal,
} from 'react-native';
import { Form } from '@unform/mobile';

import AuthContext from '../../../contexts/auth';

import api from '../../../services/api';

import Input from '../../../components/Input';

import HelpButton from '../../../components/HelpButton';

import styles from './styles';

export default function SignIn({ navigation }) {
  const formRef = useRef(null);
  const { SignIn } = useContext(AuthContext);

  async function handleSubmit({ email, password }) {
    const response = await api
      .post('/api/user/login', {
        email,
        password,
      })
      .catch(error => {
        console.log(error.request._response);
        if (error.request._response)
          Alert.alert('Error', error.request._response);
        if (error.response.data)
          Alert.alert('Error', error.response.data.message);
      });

    if (response) {
      const jwt = response.data.token;

      await AsyncStorage.setItem('jwt', jwt);
      SignIn();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logoDark.png')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Hi!</Text>
        <Text style={styles.text}>Welcome back!</Text>
      </View>

      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name='email' label='Email' type='email' />
            <Input name='password' label='Password' type='password' />
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText}>Sign In!</Text>
      </TouchableOpacity>

      <View style={styles.signUpTextContainer}>
        <Text style={styles.simpleSignUpText}>New to Sampi? </Text>
        <TouchableOpacity
          style={styles.signUpClickable}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text style={styles.clickableSignUpText}>Sign up!</Text>
        </TouchableOpacity>
      </View>

      <HelpButton
        text='These are the authentication screens,
          here you will be able to provide your credentials in order to be identified in the app.
          When you create a profile you need to correctly provide some information that we will use
          in order to make your profile more suitable for you! Later you will be able to change some of it
          as well as add a picture to your profile to customize it even more! For now, just provide your
          e-mail and password and tap the button LOGIN to start!'
      />
    </View>
  );
}
