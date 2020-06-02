import React, { useRef, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import api from '../../services/api';

import generateHeaders from '../../utils/generateHeaders';

import TopBar from '../../components/TopBar';
import UpdateContext from '../../contexts/update';

import styles from './styles';

export default function JoinGroup({ navigation }) {
  const formRef = useRef(null);

  const { updateState } = useContext(UpdateContext);

  async function handleSubmit({ inviteUrl }) {
    const [, url] = inviteUrl.split('/invite/');

    const headers = await generateHeaders();

    const response = await api.post(`/invite/${url}`, {}, headers)
      .catch(error => {
        if (error.response.data) Alert.alert('Error', error.response.data);
        if (error.data.Error) Alert.alert('Error', error.data.Error);

      });

    Alert.alert('Success', `You are now in the group ${response.data.name}`);
    updateState();
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.textHolder}>
        <Text style={styles.headerText}>Enter your invite Url and join the competition!</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="inviteUrl" label="Invite Url" type="text" />
        </Form>
      </ScrollView>

      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText}>
          Enter Group
        </Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}
