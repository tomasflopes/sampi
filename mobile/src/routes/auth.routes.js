import React from 'react';

import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
