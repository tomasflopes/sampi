import React, { useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, AsyncStorage, Alert } from 'react-native';
import { Form } from '@unform/mobile';

import AuthContext from '../../../contexts/auth';

import api from '../../../services/api';

import Input from '../../../components/Input';

import styles from './styles';

export default function SignIn({ navigation }) {
  const formRef = useRef(null);
  const { SignIn } = useContext(AuthContext);

  async function handleSubmit({ email, password }) {
    const response = await api.post('/api/user/login', {
      email,
      password
    })
      .catch((error) => {
        if (error.request._response) Alert.alert('Error', 'Fatal error connecting to server');
        if (error.response.data) Alert.alert("Error", error.response.data.message);
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
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input name="email" label="Email" type="email" />
            <Input name="password" label="Password" type="password" />
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText}>
          Sign In!
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
          <Text style={styles.clickableSignUpText}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
