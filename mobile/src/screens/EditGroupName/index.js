import React, { useContext, useRef } from 'react';
import { View, Text } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';

import styles from './styles';

export default function EditGroupName() {
  const formRef = useRef(null);

  async function handleSubmit({ name }) {
    await api.put('/group', {
      name
    })
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      });

    //TODO: Context update
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}></Text>
      <View style={styles.formContainer}>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="name" label="Name" type="name" />
        </Form>
      </View>
    </View>
  );
}
