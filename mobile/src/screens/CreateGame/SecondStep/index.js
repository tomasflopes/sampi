import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import CreateGameContext from '../../../contexts/createGame';

import ProgressStatus from '../../../components/ProgressStatus';

export default function SecondStep({ navigation }) {
  const { setActiveStep, step, nPlayers, teamSelectionMode } = useContext(CreateGameContext);

  useEffect(() => {
    setActiveStep(1);
  }, [step]);

  return (
    <View style={styles.container}>
      <ProgressStatus step={step} />
      <View>
        <TouchableOpacity>
          <Text>Next Step</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
