import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home'
import News from '../screens/News'
import About from '../screens/About'
import FeedNavigator from "./FeedNavigator";

const Drawer = createDrawerNavigator();
const AppNavigator = () => (
  <Drawer.Navigator>
      <Drawer.Screen component={FeedNavigator} name="Home"></Drawer.Screen>
      <Drawer.Screen component={News} name="News"></Drawer.Screen>
      <Drawer.Screen component={About} name="About"></Drawer.Screen>
  </Drawer.Navigator>
);

export default AppNavigator;
