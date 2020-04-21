import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();

import api from '../services/api';

import NavbarRoutes from './navbar.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  let isLoggedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
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
