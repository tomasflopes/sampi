import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../pages/Home';
import ProfileScreen from '../pages/Profile';
import LeaderBoardScreen from '../pages/LeaderBoard';

export default function BottomNavbar() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    < View style={styles.holder} >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      </Tab.Navigator>
    </View >
  );
}
