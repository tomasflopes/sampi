import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import { CreateGameProvider } from '../contexts/createGame';

import FirstStepScreen from '../screens/CreateGame/FirstStep';
import SecondStepScreen from '../screens/CreateGame/SecondStep';
import ThirdStepScreen from '../screens/CreateGame/ThirdStep';

const Stack = createStackNavigator();

export default createHomeStack = () =>
  <CreateGameProvider>
    <Stack.Navigator>
      <Stack.Screen
        name="FirstStep"
        component={FirstStepScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondStep"
        component={SecondStepScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThirdStep"
        component={ThirdStepScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </CreateGameProvider>
