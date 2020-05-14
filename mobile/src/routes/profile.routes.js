import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import ProfileScreen from '../screens/Profile';
import EditInfoScreen from '../screens/EditInfo';

const Stack = createStackNavigator();

export default createProfileStack = () =>
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditInfo"
      component={EditInfoScreen}
      options={{
        headerShown: false,
        tabBarVisible: false
      }} />
  </Stack.Navigator>
