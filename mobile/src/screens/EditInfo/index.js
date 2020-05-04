import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { Dropdown } from 'react-native-material-dropdown';

import styles from './styles';

import api from '../../services/api';

import Input from '../../components/Input';


export default function EditInfo() {
  const formRef = useRef(null);

  const [avatarUrl, setAvatarUrl] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [position, setPosition] = useState('');

  const positions = [{
    value: 'Goalkeeper',
  }, {
    value: 'Defender',
  }, {
    value: 'Midfielder',
  }, {
    value: 'Forward',
  }];

  async function getData() {
    const token = await AsyncStorage.getItem('jwt');

    const headers = {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }

    const response = await api.get('/user', headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      });

    setAvatarUrl(response.data.user.avatar_url);
    setName(response.data.user.name);
    setGender(response.data.user.gender);
    setPosition(response.data.user.position);
    setPhone(response.data.user.phone);
  }

  async function handleSubmit() {

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EDIT PROFILE INFO</Text>
      </View>
      <View style={styles.playerPhotoAndLabel}>
        <Image
          defaultSource={require('../../../assets/user-skeleton.jpeg')}
          source={{
            uri: avatarUrl
          }}
          style={styles.playerPhoto}
        />
        <TouchableOpacity>
          <Text style={styles.photoLabel}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input name="name" label="NAME" type="name" value={name} />
            <Input name="phone" label="PHONE" type="phone" value={phone} />

            <Dropdown
              label='POSITION'
              baseColor={colors.darkGray}
              style={styles.dropDown}
              data={positions}
              onChangeText={(value) => {
                setPosition(value);
              }}
              value={position}
            />

            <Input name="gender" label="GENDER" type="gender" value={gender} />
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.buttonConfirm}>
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
}
