import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomNavbar from '../../components/BottomNavbar'

export default function Profile({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <View style={styles.firstRow}>
        <View style={styles.logoutContainer}>
          <Icon style={styles.logoutIcon} name="sign-out"></Icon>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
        <Text style={styles.logo}>Sampi</Text>
      </View>

      <View style={styles.basicInformationRow}>
        <Text style={styles.basicInformation}>ACTIVE |</Text>
        <Text style={styles.basicInformation}>MALE |</Text>
        <Text style={styles.basicInformation}>BORN 3.5.2002</Text>
      </View>

      <View style={styles.playerPhotoName}>
        <Text style={styles.playerPhoto}>Photo</Text>
        <Text style={styles.playerName}>Player 1</Text>
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

        <View style={styles.mainInfo}>
          <Icon name=""></Icon>
          <Text>AGE: 18 YEARS</Text>
        </View>
      </View>

      <View style={styles.spacer} />
      <TouchableOpacity onPress={() => navigation.navigate('EditInfo')}><Text>Edit Info</Text></TouchableOpacity>

      <BottomNavbar navigation={navigation} active={'Profile'} />

    </View>
  )
}
