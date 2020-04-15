import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import LeaderBoardScreen from '../screens/LeaderBoard';
import CreateGameScreen from '../screens/CreateGame';
import EditInfoScreen from '../screens/EditInfo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function BottomNavbar() {
  createHomeStack = () =>
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

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#1E2A40"
        barStyle={{
          backgroundColor: '#d6e0f1',
          justifyContent: 'flex-start',
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

            return <Icon style={{ width: 60, height: 60 }} name={iconName} size={50} color={color} />;
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
          children={createHomeStack}
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
    </NavigationContainer>
  );
}

