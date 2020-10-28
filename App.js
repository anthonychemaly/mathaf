import React , {useState , useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './app/navigation/AppNavigator';
import FeedNavigator from './app/navigation/FeedNavigator';
import { LogBox } from 'react-native';
import colors from './app/config/colors';
LogBox.ignoreAllLogs()

export default function App() {

  const MyTheme = {
    dark: false,
    colors: {
      background: '#fff',
      card: '#fff',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {/* <AppNavigator></AppNavigator> */}
    <FeedNavigator></FeedNavigator>
   </NavigationContainer>
  );
}
 