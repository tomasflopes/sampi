import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Invite({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.topBar} />
      <View style={styles.textHolder}>
        <Text style={styles.headerText}>Invite new people to your group!</Text>
      </View>
      <View style={styles.urlPiece}>
        <Text style={styles.headerUrl}>Share this link with your friends!</Text>
        <View style={styles.urlHolder}>
          <Text style={styles.url}>http://sampi.invite/h53j8kj</Text>
          <Text>Clip</Text>
        </View>
        <View style={styles.socialsHolder}>
          <View style={styles.socials}>
            <Text style={styles.socialMediaLogo}>Twitter</Text>
            <Text style={styles.socialMediaLogo}>FaceBook</Text>
            <Text style={styles.socialMediaLogo}>Instagram</Text>
          </View>
          <Text style={styles.shareText}>Share it on your socials!</Text>
        </View>
      </View>
      <View style={styles.bottomSpacer} />
    </View >
  );
}
