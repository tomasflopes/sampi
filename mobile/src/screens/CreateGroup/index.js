import React, { useEffect, useContext } from 'react';
import { View, Alert } from 'react-native';

import { generateHeaders } from '../../utils';
import api from '../../services/api';

import UpdateContext from '../../contexts/update';

export default function CreateGroup({ navigation }) {
  const { updateState } = useContext(UpdateContext);

  async function createGroup() {
    const headers = await generateHeaders();

    const response = await api.post('/group', {}, headers).catch(error => {
      Alert.alert('Error', error.response.data);
    });

    Alert.alert(
      'Success',
      `You have created a group with the name: ${response.data.name}`
    );
    updateState();
    navigation.goBack();
  }

  useEffect(() => {
    createGroup();
  }, []);

  return <View />;
}
