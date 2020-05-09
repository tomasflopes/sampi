import * as React from 'react';
import { View, Text, Share, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import BackArrow from '../../components/BackArrow'

export default function Invite({ navigation }) {
  async function handleShare() {
    try {
      const result = await Share.share({
        message: 'Join my group on Sampi!',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          Alert.alert('Shared');
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

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
        <Text style={styles.headerText}>Invite new people to your group!</Text>
      </View>
      <View style={styles.urlPiece}>
        <Text style={styles.headerUrl}>Share this link with your friends!</Text>
        <View style={styles.urlHolder}>
          <Text style={styles.url}>http://sampi.invite/h53j8kj</Text>
          <Icon style={styles.clipboardIcon} name="clipboard"></Icon>
        </View>
        <View style={styles.socialsHolder}>
          <TouchableOpacity onPress={handleShare}>
            <Text>
              Share
            </Text>
          </TouchableOpacity>
          <Text style={styles.shareText}>Share it on your socials!</Text>
        </View>
      </View>
      <View style={styles.bottomSpacer} />
    </View >
  );
}
