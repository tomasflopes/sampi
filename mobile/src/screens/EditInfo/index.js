import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage, ScrollView, Alert } from 'react-native';
import { Form } from '@unform/mobile';

import { Picker } from '@react-native-community/picker';

import UpdateContext from '../../contexts/update';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';

import api from '../../services/api';
import { generateHeaders } from '../../utils';

import Input from '../../components/Input';
import TopBar from '../../components/TopBar';

export default function EditInfo({ navigation }) {
  const formRef = useRef(null);

  const { updateState } = useContext(UpdateContext);

  const [avatarUrl, setAvatarUrl] = useState('https://upload-sampi.s3.amazonaws.com/default-user.jpeg');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [file, setFile] = useState({});

  async function getData() {
    const headers = await generateHeaders();

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
    const headers = await generateHeaders();

    let formData = new FormData();

    if (name) formData.append('name', name);
    if (phone) formData.append('phone', phone);
    if (position) formData.append('position', position);
    if (Object.keys(file).length > 0) formData.append('file', file);

    api.put('/user', formData, headers)
      .catch(error => {
        console.log(error);
        Alert.alert("Error", error.response.data.details.message);
      })
      .then(() => {
        Alert.alert("Success", "Your profile information is now updated!");
        updateState();
        navigation.goBack();
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
      <TopBar navigation={navigation} />
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

            <Picker
              selectedValue={position}
              style={styles.formPicker}
              onValueChange={itemValue => itemValue !== 'POSITIONS' ? setPosition(itemValue) : null}
            >
              <Picker.Item label="POSITIONS" value="POSITIONS" />
              <Picker.Item label="Goalkeeper" value="Goalkeeper" />
              <Picker.Item label="Defender" value="Defender" />
              <Picker.Item label="Midfielder" value="Midfielder" />
              <Picker.Item label="Forward" value="Forward" />
            </Picker>

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
