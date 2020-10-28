import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Icon from 'react-native-vector-icons/';
import {Linking} from 'react-native'


export default function CallButton() {
    return (
        <View>
        <Button onPress={Linking.openURL(`tel:${9613123456}`)}>
            <Icon.SimpleLineIcons name="screen-smartphone" size={20}></Icon.SimpleLineIcons>
        </Button>
        </View>
    )
}
