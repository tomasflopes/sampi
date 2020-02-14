import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home'
import ProfileScreen from './pages/Profile'
import LeaderBoardScreen from './pages/LeaderBoard'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

