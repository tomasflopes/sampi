import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../../components/Input';

import styles from './styles';

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
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

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />

        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => formRef.current.submitForm()}
        >
          <Text style={styles.buttonText}>
            Create Game
          </Text>
        </TouchableOpacity>
      </Form>
    </View>
  );
}
