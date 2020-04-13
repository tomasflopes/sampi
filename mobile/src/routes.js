import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import LeaderBoardScreen from './pages/LeaderBoard';
import InviteScreen from './pages/Invite';
import CreateGameScreen from './pages/CreateGame';
import EditInfoScreen from './pages/EditInfo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#1E2A40"
        inactiveColor="rgba(120, 167, 255, 0.2)"
        barStyle={{ backgroundColor: 'rgba(120, 167, 255, 0.2)' }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

