import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import CreateGameStack from '../routes/createGame.routes';

import HomeScreen from '../screens/Home';
import InviteScreen from '../screens/Invite';
import CreateGroupScreen from '../screens/CreateGroup';
import JoinGroupScreen from '../screens/JoinGroup';
import EditGroupNameScreen from '../screens/EditGroupName';

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
      children={CreateGameStack}
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
      name="EditGroupName"
      component={EditGroupNameScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }}
    />
    <Stack.Screen
      name="CreateGroup"
      component={CreateGroupScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }} />
    <Stack.Screen
      name="JoinGroup"
      component={JoinGroupScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }} />
  </Stack.Navigator>
