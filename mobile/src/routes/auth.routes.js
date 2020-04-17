import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';

const Stack = createStackNavigator();

export default createAuthStack = () =>
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
