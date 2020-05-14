import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../routes/home.routes'
import ProfileStack from '../routes/profile.routes'

import LeaderBoardScreen from '../screens/LeaderBoard';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { colors } from '../styles';

export default function BottomNavbar() {
  return (
    <Tab.Navigator
      activeColor={colors.activeDarkBlue}
      initialRouteName="Home"
      barStyle={{
        backgroundColor: colors.buttonsLightBlue,
        justifyContent: 'flex-start',
        height: 60,
      }}
      backBehavior='history'
      tabBarVisible={false}
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

          return <Icon style={{ fontSize: 45, height: 50, width: 50 }} name={iconName} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        children={ProfileStack}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Home"
        children={HomeStack}
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
  );
}

