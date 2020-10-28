import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView , FlatList, TouchableOpacity } from 'react-native'
import colors from "../config/colors"

export default function CategorySlider({categoryData}) {

    const [clickedCategory, setClickedCategory] = useState("1")

    return (

<FlatList
          data={categoryData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.id}
          horizontal={true}
          scrollEnabled={true}
          renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>{setClickedCategory(item.id)}}>
            <View style={styles.typeContainer}>
            <Text style={clickedCategory==item.id ? styles.typeText : styles.unclickedTypeText}>{item.title}</Text>
            <View style={clickedCategory==item.id ? styles.borderContainer : styles.unclickedBorderContainer }/>
            </View>
        </TouchableOpacity>
          )}
        />
    )
}

const styles = StyleSheet.create({
    typeContainer:{
        paddingHorizontal: 5
      },
      typeText:{
        fontFamily:"Poppins-SemiBold",
        textTransform:"uppercase",
        color:colors.customBlue,
        marginTop:-1
      },
      unclickedTypeText:{
        fontFamily:"Poppins-SemiBold",
        textTransform:"uppercase",
        color:colors.lightGrey,
        marginTop:-1
      },
      borderContainer:{
        backgroundColor:colors.red,
        width:28,
        height:1.5,
        paddingBottom:5
      },
      unclickedBorderContainer:{
        backgroundColor:colors.lightGrey,
        width:28,
        height:1.5,
        paddingBottom:5
      }
  
})
