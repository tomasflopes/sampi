import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage, ScrollView, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { Dropdown } from 'react-native-material-dropdown';

import UpdateContext from '../../contexts/update';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';

import api from '../../services/api';

import Input from '../../components/Input';

export default function EditInfo({ navigation }) {
  const formRef = useRef(null);

  const { updateState } = useContext(UpdateContext);

  const [avatarUrl, setAvatarUrl] = useState('https://upload-sampi.s3.amazonaws.com/default-user.jpeg');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [file, setFile] = useState({});

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
        Authorization: `Bearer: ${token}`,
      }
    }

    const response = await api.get('/user', headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      });

    setAvatarUrl(response.data.user.avatar_url);
    setName(response.data.user.name);
    setPosition(response.data.user.position);
    setPhone(response.data.user.phone);
  }

  async function handleSubmit({ name, phone }) {
    const token = await AsyncStorage.getItem('jwt');

    const headers = {
      headers: {
        Authorization: `Bearer: ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }

    let formData = new FormData();

    console.log(file);
    if (name) formData.append('name', name);
    if (phone) formData.append('phone', phone);
    if (position) formData.append('position', position);
    if (file) formData.append('file', file);

    api.put('/user', formData, headers)
      .catch(error => {
        Alert.alert("Error", error.response.data.details[0].message);
      })
      .then(() => {
        Alert.alert("Success", "Your profile information is now updated you can navigate back to the main screen!");
        updateState();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  async function selectImage() {
    getPermissionAsync();

    try {
      const tempFile = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!tempFile.cancelled) {
        const splicedArray = tempFile.uri.split('.');
        const extension = splicedArray[splicedArray.length - 1];

        const type = `${tempFile.type}/${extension}`;

        setFile({
          uri: tempFile.uri,
          name: tempFile.uri.split('/')[11],
          type
        });
      }
    } catch (error) {
      Alert.alert("Error", error.response.data);
    }
  }

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EDIT PROFILE INFO</Text>
      </View>
      <View style={styles.playerPhotoAndLabel}>
        <Image
          source={{
            uri: file.uri || avatarUrl
          }}
          style={styles.playerPhoto}
        />
        <TouchableOpacity onPress={selectImage}>
          <Text style={styles.photoLabel}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input name="name" label="NAME" type="name" />
            <Input name="phone" label="PHONE" type="phone" />

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
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonConfirm}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>

    </View>
  );
}
