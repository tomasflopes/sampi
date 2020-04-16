import * as React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import CreateGameScreen from '../screens/CreateGame';
import EditInfoScreen from '../screens/EditInfo';
import HomeScreen from '../screens/Home';

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
    <Stack.Screen name="EditInfo" component={EditInfoScreen} />
  </Stack.Navigator>
