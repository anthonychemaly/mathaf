import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import * as Icon from 'react-native-vector-icons/';
import colors from "../config/colors";

function Card({ title, subTitle, image, onPress }) {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={{flexDirection: "row" , alignContent:"space-between"}}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          { subTitle > 0 &&
          <View style={{flexDirection:"row" , alignItems:"center"}}>
          <Icon.AntDesign name="eye" size={16} color={colors.green} style={{marginRight:2}}></Icon.AntDesign>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle} 
          </Text>
            <Text style={styles.staticSubTitle}> visits/month</Text>
          </View>}
        </View>
        <View style={{justifyContent:"center" , alignSelf:"center",position:"absolute" , left: 360}}>
        <Icon.FontAwesome style={{ paddingHorizontal : 7}}name="bookmark-o" size={30} color={colors.red}></Icon.FontAwesome>   
        </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
      backgroundColor: "#fff",
      marginBottom: 10,
      overflow: "hidden",
    },
    detailsContainer: {
        padding: 10,
    },
    image: {
        borderRadius: 15,
        width: "100%",
        height: 240,
  },
  subTitle: {
    fontFamily:"Montserrat-ExtraBold",
    fontWeight:"bold",
    color: colors.lightGrey,
  },
  staticSubTitle:{
    fontFamily:"Montserrat-Light",
    color: colors.lightGrey,
    fontWeight:"normal"
  },
  title: {
    fontFamily:"Montserrat-ExtraBold",
    textTransform: 'uppercase',
    color: colors.customBlue,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Card;
