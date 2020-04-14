import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.logoutContainer}>
          <Icon style={styles.logoutIcon} name="sign-out"></Icon>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
        <Text style={styles.logo}>Sampi</Text>
      </View>

      <View style={styles.basicInformationRow}>
        <Text style={styles.basicInformation}>ACTIVE |</Text>
        <Text style={styles.basicInformation}> MALE |</Text>
        <Text style={styles.basicInformation}> BORN 3.5.2002</Text>
      </View>

      <View style={styles.playerPhotoName}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1236082038014447618/peWO3tpF_400x400.jpg'
          }} style={styles.playerPhoto} />
        < Text style={styles.playerName} > Player 1</Text>
      </View>

      <View style={styles.mainInfoContainer}>
        <View style={styles.mainInfo}>
          <Icon name=""></Icon>
          <Text>NAME: PLAYER X DA SILVA</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name=""></Icon>
          <Text>PHONE: 918764567</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name=""></Icon>
          <Text>POSITION: FORWARD</Text>
        </View>

        <View style={[styles.mainInfo, styles.mainInfoLast]} >
          <Icon name=""></Icon>
          <Text>AGE: 18 YEARS</Text>
        </View>
      </View>

      <View style={styles.spacer} />
      <TouchableOpacity style={styles.editInfo} onPress={() => navigation.navigate('EditInfo')}><Text style={styles.editInfoText}>Edit Info</Text></TouchableOpacity>
      <View style={styles.spacer} />
    </View >
  )
}
