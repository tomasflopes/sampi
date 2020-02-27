import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import BackArrow from '../../components/backArrow'

export default function Invite({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.topBar} >
        <BackArrow style={styles.backArrow} navigation={navigation} navigateTo={'Home'} />
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
          <View style={styles.socials}>
            <Icon style={styles.socialMediaLogo} name="twitter"></Icon>
            <View style={styles.socialsSpacer}></View>
            <Icon style={styles.socialMediaLogo} name="facebook"></Icon>
            <View style={styles.socialsSpacer}></View>
            <Icon style={styles.socialMediaLogo} name="instagram"></Icon>
          </View>
          <Text style={styles.shareText}>Share it on your socials!</Text>
        </View>
      </View>
      <View style={styles.bottomSpacer} />
    </View >
  );
}
