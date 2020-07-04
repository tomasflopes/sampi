import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Share,
  TouchableOpacity,
  Alert,
  Clipboard,
} from 'react-native';
import styles from './styles';

import { baseUrl } from '../../../config';

import api from '../../services/api';
import UpdateContext from '../../contexts/update';

import { generateHeaders } from '../../utils';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import TopBar from '../../components/TopBar';

export default function Invite({ navigation }) {
  const { update, updateState } = useContext(UpdateContext);

  const inviteMessage = `Join my group on Sampi! ${baseUrl}/invite/${inviteUrl}
To join:
1. Install the Sampi app;
2. In the main screen go to Join Group and paste this URL
3. Have fun!`;

  const [inviteUrl, setInviteUrl] = useState('');
  const [groupName, setGroupName] = useState('');

  async function getGroupData() {
    const headers = await generateHeaders();

    const response = await api.get('/group', headers).catch(error => {
      Alert.alert('Error', error.response.data.message);
    });

    setInviteUrl(response.data.id);
    setGroupName(response.data.name);
  }

  async function handleClipboardCopy() {
    Alert.alert('Copied', 'Content copied to your clipboard!');
    Clipboard.setString(`${baseUrl}/invite/${inviteUrl}`);
  }

  async function handleShare() {
    try {
      await Share.share({
        message: inviteMessage,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function handleLeaveGroup() {
    const headers = await generateHeaders();

    await api.patch('/group', {}, headers).catch(error => {
      console.log(error);
      Alert.alert('Error', error.response.data.message);
    });

    updateState();
    Alert.alert('Success', 'You have leaved the group');
    navigation.goBack();
  }

  function handleChangeClick() {
    navigation.navigate('ManageGroup');
  }

  useEffect(() => {
    getGroupData();
  }, [update]);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.textHolder}>
        <View style={styles.groupName}>
          <Text style={[styles.headerText, styles.firstText]}>
            Group Name: {groupName}
          </Text>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={handleChangeClick}
          >
            <Text style={styles.changeButtonText}>Manage</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Invite new people to your group!</Text>
      </View>
      <View style={styles.urlPiece}>
        <Text style={styles.headerUrl}>Share this link with your friends!</Text>
        <View style={styles.urlHolder}>
          <Text style={styles.url}>{`${baseUrl}/invite/${inviteUrl}`}</Text>
          <TouchableOpacity onPress={handleClipboardCopy}>
            <Icon style={styles.clipboardIcon} name='clipboard'></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.shareSpace}>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Icon style={styles.shareIcon} name='share' />
          <Text style={styles.shareText}>Share it</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>

      <View style={styles.leaveGroupSpace}>
        <TouchableOpacity onPress={handleLeaveGroup} style={styles.leaveButton}>
          <Text style={styles.leaveText}>Leave Group</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
