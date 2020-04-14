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

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#1E2A40"
        barStyle={{
          backgroundColor: 'rgba(120, 167, 255, .2)',
          shadowColor: '#ccc',
          width: '120%',
          marginLeft: -40,
          paddingLeft: 20,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'stretch',
          height: 60,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            } else if (route.name === 'LeaderBoard') {
              iconName = focused ? 'format-list-bulleted' : 'format-list-checkbox'
            }

            return <Icon style={{ width: 50, height: 50 }} name={iconName} size={40} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="LeaderBoard"
          component={LeaderBoardScreen}
          options={{
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

