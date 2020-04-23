import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Form } from '@unform/mobile';

import api from '../../../services/api';

import Input from '../../../components/Input';

import styles from './styles';

export default function SignIn({ navigation }) {
  const formRef = useRef(null);

  async function handleSubmit({ email, password }) {
    const response = await api.post('/api/user/login', {
      email,
      password
    })
      .catch(() => {
        //? Invalid Credentials
      });

    if (response) {
      //? response.data.token with jwt token for authenticated user
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logoEscuro.png')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Hi!</Text>
        <Text style={styles.text}>Welcome back!</Text>
      </View>

      <View style={styles.formContainer}>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />

        </Form>
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
