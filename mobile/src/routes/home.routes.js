import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CreateGameScreen from '../screens/CreateGame';
import InviteScreen from '../screens/Invite';
import EditInfoScreen from '../screens/EditInfo';

const Stack = createStackNavigator();

export default createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateGame"
      component={CreateGameScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Invite"
      component={InviteScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }}
    />
    <Stack.Screen
      name="EditInfo"
      component={EditInfoScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }} />
  </Stack.Navigator>
