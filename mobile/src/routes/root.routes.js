import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { isSignedIn } from "../services/auth";
import api from '../services/api';

import NavbarRoutes from './navbar.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const signed = false;

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
            <Stack.Screen
              name="Auth"
              children={AuthRoutes}
              options={{ headerShown: false }}
            />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
