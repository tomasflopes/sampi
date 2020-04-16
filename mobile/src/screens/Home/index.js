import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logoEscuro.png')}
        />
      </View>
      <View style={styles.divider}>
        <Text style={styles.cards}>cards</Text>
      </View>
      <View style={styles.spacer} />
      <View
        style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonInvite}
          onPress={() => navigation.navigate('Invite')}
        >
          <Text style={styles.buttonText}>
            Invite Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => { navigation.navigate('CreateGame') }}
        >
          <Text style={styles.buttonText}>
            Create Game
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
    </View>
  )
}
