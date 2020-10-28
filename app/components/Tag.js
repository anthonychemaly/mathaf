import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from "../config/colors"

export default function Tag({text}) {
    return (
        <View>
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        borderWidth:2,
        borderColor:colors.customBlue,
        borderRadius: 5,
        alignSelf: 'center',
        paddingHorizontal: 12,
        margin: 4
        
    },
    text:{
        fontFamily:"Montserrat-SemiBold",
        color: colors.customBlue,
        fontWeight:"bold",
        fontSize: 15,
    }
})
