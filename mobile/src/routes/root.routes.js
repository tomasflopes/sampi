import React, { useState } from 'react';
import { AsyncStorage } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import SignInScreen from '../screens/Auth/SignIn'
import SignUpScreen from '../screens/Auth/SignUp'

const Stack = createStackNavigator();

import NavbarRoutes from './navbar.routes';

export default function Routes() {
  const [signed, setSigned] = useState(false);

  async function checkAuth() {
    const token = await AsyncStorage.getItem('jwt');

    const isSigned = token === null ? true : false;
    setSigned(isSigned);
  }

  console.log(signed);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <Stack.Screen
            name="Root"
            children={NavbarRoutes}
            options={{ headerShown: false }}
          />
        ) : (
            <>
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
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
