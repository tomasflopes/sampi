import React, { useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';

import TopBar from '../../components/TopBar';

import UpdateContext from '../../contexts/update';

import api from '../../services/api';

import { generateHeaders } from '../../utils';

import styles from './styles';

export default function ManageGroup({ navigation }) {
  const formRef = useRef(null);
  const { updateState } = useContext(UpdateContext);

  async function handleSubmit({ name }) {
    const headers = await generateHeaders();

    await api.put('/group', {
      name
    }, headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      });

    Alert.alert('Success', 'Name updated with success!');
    navigation.goBack();
    updateState();
  }

  function handleOtherMembersClick() {
    navigation.navigate('OtherGroupMembers')
  }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />

      <Text style={styles.headerText}>Manage Your Group</Text>
      <View style={styles.formContainer}>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="name" label="Name" type="name" />
        </Form>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
        <Text style={styles.submitButtonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.otherMembersButton} onPress={handleOtherMembersClick}>
        <Text style={styles.otherMembersButtonText}>See the other group members</Text>
      </TouchableOpacity>
    </View>
  );
}
