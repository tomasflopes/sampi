import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Share, TouchableOpacity, Image, Alert, AsyncStorage, Clipboard } from 'react-native';
import styles from './styles';

import { baseUrl } from '../../../config';

import api from '../../services/api';
import UpdateContext from '../../contexts/update';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import BackArrow from '../../components/BackArrow'

export default function Invite({ navigation }) {
  const { updateState } = useContext(UpdateContext);

  const [inviteUrl, setInviteUrl] = useState('');
  const [groupName, setGroupName] = useState('');

  async function getGroupData() {
    const token = await AsyncStorage.getItem('jwt');

    const headers = {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }

    const response = await api.get('/group', headers)
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      })

    setInviteUrl(response.data[0]._id);
    setGroupName(response.data[0].name);
  }

  async function handleClipboardCopy() {
    Alert.alert('Copied', 'Content copied to your clipboard!')
    Clipboard.setString(`${baseUrl}/invite/${inviteUrl}`);
  }

  async function handleShare() {
    try {
      await Share.share({
        message: `Join my group on Sampi! ${baseUrl}/invite/${inviteUrl}`,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function handleLeaveGroup() {
    const token = await AsyncStorage.getItem('jwt');

    const headers = {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }

    await api.post('/leave', {}, headers)
      .catch(error => {
        Alert.alert("Error", error.response.data.message);
      });

    updateState();
    navigation.goBack();
    Alert.alert('Success', 'You have leaved the group');
  }

  useEffect(() => {
    getGroupData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar} >
        <View style={styles.backArrowHolder}>
          <BackArrow navigation={navigation} navigateTo={'Home'} />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/logoBright.png')}
          />
        </View>
      </View>
      <View style={styles.textHolder}>
        <Text style={[styles.headerText, styles.firstText]}>Group Name: {groupName}</Text>
        <Text style={styles.headerText}>Invite new people to your group!</Text>
      </View>
      <View style={styles.urlPiece}>
        <Text style={styles.headerUrl}>Share this link with your friends!</Text>
        <View style={styles.urlHolder}>
          <Text style={styles.url}>{`${baseUrl}/invite/${inviteUrl}`}</Text>
          <TouchableOpacity onPress={handleClipboardCopy}>
            <Icon style={styles.clipboardIcon} name="clipboard"></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.shareSpace}>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Icon style={styles.shareIcon} name="share" />
          <Text style={styles.shareText}>Share it</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>

      <View style={styles.leaveGroupSpace}>
        <TouchableOpacity onPress={handleLeaveGroup} style={styles.leaveButton}>
          <Text style={styles.leaveText}>Leave Group</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}
