import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { general } from '../styles';

export default function HelpButton({ text, flex }) {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <>
      <Modal visible={visible} animated={true} animationType="slide" style={styles.modalContainer}>
        <View style={styles.modalHeaderContainer}>
          <Text style={styles.modalHeader}>HELP</Text>
        </View>
        <View style={styles.modalTextContainer}>
          <Text style={styles.modalText}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.modalCloseButton} onPress={toggleVisibility}>
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>

      <View style={[styles.helpButtonContainer, { flex: flex || .8 }]}>
        <TouchableOpacity style={styles.helpButton} onPress={toggleVisibility}>
          <Icon style={styles.helpIcon} name="question-mark" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  helpButtonContainer: {
    alignItems: 'flex-end',
  },

  helpButton: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonsLightBlue,
  },

  helpIcon: {
    fontSize: 28,
    color: colors.mainBlue,
  },

  modalContainer: {
    flex: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  modalHeader: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: colors.mainBlue,
  },

  modalTextContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    paddingHorizontal: 15,
    textAlign: 'justify',
    color: colors.mainBlue,
    lineHeight: 28,
  },

  modalCloseButton: general.fullWidthButton,

  modalCloseButtonText: general.fullWidthButtonText,
});
