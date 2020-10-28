import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from "../screens/Home";
import ListingDetails from "../screens/ListingDetails";
import * as Icon from 'react-native-vector-icons/';

export default function FeedNavigator() {
    return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="ListingDetails" component={ListingDetails} 
        options={{headerStyle: {backgroundColor:"#fffff"},headerTitle: "" , headerRight: ()=> <View style={{flexDirection:"row"}}>
            <Icon.SimpleLineIcons style={{ paddingHorizontal : 3}}name="screen-smartphone" size={20}></Icon.SimpleLineIcons>
            <Icon.Feather style={{ paddingHorizontal : 5}}name="share" size={20}></Icon.Feather>
            <Icon.FontAwesome style={{ paddingHorizontal : 7}}name="bookmark-o" size={20}></Icon.FontAwesome>
        </View>
         }}/>
    </Stack.Navigator>
    )
}
