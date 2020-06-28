import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import { UpdateProvider } from '../contexts/update';

const Stack = createStackNavigator();

import AuthContext from '../contexts/auth';

import NavbarRoutes from './navbar.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <UpdateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {signed ? (
            <Stack.Screen
              name='Root'
              children={NavbarRoutes}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name='Auth'
              children={AuthRoutes}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UpdateProvider>
  );
}
