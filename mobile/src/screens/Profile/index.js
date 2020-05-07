import React, { useEffect, useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native'
import styles from './styles';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';
import UpdateContext from '../../contexts/update';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [position, setPosition] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('https://upload-sampi.s3.amazonaws.com/default-user.jpeg');
  const [age, setAge] = useState('');

  const { signOut } = useContext(AuthContext);
  const { update } = useContext(UpdateContext);

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
      })

    const birthdayDate = new Date(response.data.user.birth);

    setName(response.data.user.name);
    setBirth(sanitizeDate(birthdayDate));
    setGender(response.data.user.gender);
    setPosition(response.data.user.position);
    setPhone(response.data.user.phone);
    setAvatarUrl(response.data.user.avatar_url);
    setAge(response.data.age);
  }

  async function handleLogout() {
    Alert.alert('Signed Out!', 'You have been signed out.');

    await AsyncStorage.removeItem('jwt');
    signOut();
  }

  function sanitizeDate(date) {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return day + "-" + month + "-" + year;
  }

  useEffect(() => {
    getData();
  }, [update]);

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <TouchableOpacity
          style={styles.logoutContainer}
          onPress={handleLogout}
        >
          <Icon style={styles.logoutIcon} name='logout'></Icon>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../../assets/logoEscuro.png')}
        />
        <View style={styles.firstRowSpacer} />
      </View>

      <View style={styles.basicInformationRow}>
        <Text style={styles.basicInformation}>ACTIVE |</Text>
        <Text style={styles.basicInformation}> {gender} |</Text>
        <Text style={styles.basicInformation}> BORN {birth}</Text>
      </View>

      <View style={styles.playerPhotoName}>
        <Image
          defaultSource={require('../../../assets/user-skeleton.jpeg')}
          source={{
            uri: avatarUrl
          }}
          style={styles.playerPhoto}
        />
        < Text style={styles.playerName} >{name}</Text>
      </View>

      <View style={styles.mainInfoContainer}>
        <View style={styles.mainInfo}>
          <Icon name="account-card-details" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>NAME: {name}</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name="cellphone-android" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>PHONE: {phone}</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name="soccer-field" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>POSITION: {position}</Text>
        </View>

        <View style={[styles.mainInfo, styles.mainInfoLast]} >
          <Icon name="calendar" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>AGE: {age} YEARS</Text>
        </View>
      </View>

      <View style={styles.spacer} />
      <TouchableOpacity style={styles.editInfo} onPress={() => navigation.navigate('EditInfo')}><Text style={styles.editInfoText}>Edit Info</Text></TouchableOpacity>
      <View style={styles.spacer} />
    </View >
  )
}
