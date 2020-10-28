import React , {useEffect , useState} from 'react'
import { View, Text , StyleSheet , Image, FlatList , ScrollView } from 'react-native'
import colors from "../config/colors"
import * as Icon from 'react-native-vector-icons/';
import Tag from "../components/Tag"
import Moment from "moment"

export default function ListingDetails({ route }) {
    var listing = route.params.id;
      console.log(route)
      const [details, setDetails] = useState("");
      const [image, setImage] = useState(route.params.image);

      async function loadData() {
        try {
          const response = await fetch("http://138.197.24.211/DGA/web/en/api/locations/show?id="+listing);
          const data = await response.json();
          console.log(data.data.main_image)
          setDetails(data.data)
          setImage(data.data.main_image)
        } catch (err) {
          console.log(err)        
        }
      }

      useEffect(() => {
        loadData();
      }, []);

    return (
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
          <View style={{marginTop:4 , paddingVertical:6,}}>
            <Image source={{uri: image }} style={styles.mainImage}></Image>
         </View>
            <Text style={styles.title}>{details.title}</Text>
            <View style={{flexDirection:"row"}}>
            <Icon.MaterialIcons name="location-on" size={16} color={colors.lightGray} style={{marginRight:2}}></Icon.MaterialIcons>
            <Text style={styles.location}>86 kilometers northeast of the city of Beirut</Text>
            </View>
            <View style={styles.optionsContainer}>
              <View style={styles.rightBorderOption}>
                <Icon.FontAwesome name="photo" size={19} style={styles.icon }></Icon.FontAwesome>
                <Text style={styles.option}>Photos</Text>
              </View>
              <View style={styles.rightBorderOption}>
                <Icon.FontAwesome5 name="globe" size={20} style={styles.icon }></Icon.FontAwesome5>
                <Text style={styles.option}>360°</Text>
              </View>
              <View style={styles.rightBorderOption}>
                <Icon.Foundation name="play-video" size={24} style={styles.icon}></Icon.Foundation>
                <Text style={styles.option}>Videos</Text>
              </View>
              <View style={styles.options}>
                <Icon.FontAwesome name="map-o" size={20} style={styles.icon}></Icon.FontAwesome>
                <Text style={styles.option}>Map</Text>
              </View>
            </View>
            <View style={{paddingVertical:15}}>
              <Text style={styles.gtkTitle}>
                Good To Know
              </Text>
              <View style={styles.borderContainer}></View>
              </View>
            <View>
            { details.openingHours == !null && <View style={{marginTop:5}}>
              <View style={styles.gtkInfo}>
                <Icon.AntDesign name="clockcircleo" size={20} style={styles.icon } color={colors.red}></Icon.AntDesign>
                <Text style={styles.gtkMain}>Opening Hours:</Text>
              </View>
                <Text style={styles.gtkSub}>{details.openingHours}</Text>
            </View>}
            <View>
                {details.entranceFeesLocals!= null && details.entranceFeesForeigns != null &&
              <View style={styles.gtkInfo}>
                <Icon.Feather name="calendar" size={20} style={styles.icon } color={colors.red}></Icon.Feather>
                <Text style={styles.gtkMain}>Ticket Price:</Text>
              </View>}
                {details.entranceFeesLocals >0 && <Text style={styles.gtkSub}>{details.entranceFeesLocals} for Lebanese</Text>}
                {details.entranceFeesForeigns >0 && <Text style={styles.gtkSub}>{details.entranceFeesForeigns} for Tourists</Text>}
            </View>
            <View>
              <View style={styles.gtkInfo}>
                <Icon.FontAwesome name="hourglass-o" size={20} style={styles.icon } color={colors.red}></Icon.FontAwesome>
                <Text style={styles.gtkMain}>People typically spend:</Text>
              </View>
              <Text style={styles.gtkSub}>{details.spending !="" ? details.spending : "3h" }</Text>
            </View>
            <FlatList
          style={styles.flatlist}
          contentContainerStyle={{flexDirection:"row" , flexWrap:"wrap" , paddingTop:15}}
          data={details.accessibility}
          keyExtractor={(tag , i) => i.toString()}
          renderItem={({ item }) => (
            <Tag text={item.title}></Tag>
          )}
        />
            </View>
            { details.events != [] &&
            <View >
              <View style={{paddingVertical:15}}>
            <Text style={styles.gtkTitle}>
                Events
              </Text>
              <View style={styles.borderContainer}></View>
              </View>
              <View
              style={styles.flatlist}>
                  <Text style={styles.event}>
                  - The Carnival
                  </Text>
                  <Text style={styles.time}>
                    16 April
                  </Text>
                  </View>
              <FlatList
                style={styles.flatlist}
                data={details.events}
                keyExtractor={(event) => event.id}
                renderItem={({ item }) => (
                  <View style={{paddingBottom:15}}>
                  <Text style={styles.event}>
                  - {item.title}
                  </Text>
                  <Text style={styles.time}>
                    {  Moment(item.eventDate).format("D MMM") }
                  </Text>
                  </View>
          )}
        />
            </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  title:{
    fontFamily: "Montserrat-ExtraBold",
    textTransform: 'uppercase',
    color: colors.customBlue,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    
  },
  icon:{
    marginRight: 7
  },  
  rightBorderOption:{
    padding:13,
    width:"25%",
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center",
    flexDirection:"row",
    borderRightColor: colors.lightGray,
    borderRightWidth:1,
  },
  optionsContainer:{
    flexDirection:"row",
    width: "100%",
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    borderBottomColor: colors.lightGray,
    borderBottomWidth:1
  },
  options:{
    padding:13,
    width:"25%",
    justifyContent:"center",
    flexDirection:"row",

    // borderLeftColor: colors.lightGray,
    // borderLeftWidth:1
  },
  option:{
    fontFamily: "Montserrat-Bold",
    textTransform: 'uppercase',
    color: colors.lightGray,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    
  },  
  location:{
    fontFamily: "Montserrat-Regular",
    color: colors.fadedBlack,
    fontSize: 15,
    marginBottom: 5,
  },  
  main:{
    marginHorizontal:10,
    backgroundColor:"#fff"
    },
  mainImage:{
    borderRadius: 15,
    width: "100%",
    height: 240,
  },
  gtkTitle:{
    fontFamily: "Montserrat-ExtraBold",
    textTransform: 'uppercase',
    color: colors.fadedBlack,
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    marginHorizontal:10,
  },
  borderContainer:{
    backgroundColor:colors.red,
    width:28,
    height:1.5,
    paddingBottom:3,
    marginTop:-2,
    marginHorizontal:10,

  },
  gtkInfo:{
    flexDirection:"row",
  },
  gtkMain:{
    fontFamily: "Montserrat-Regular",
    color: colors.lightGray,
    fontSize: 15,
  },
  gtkSub:{
    fontFamily: "Montserrat-SemiBold",
    color: colors.fadedBlack,
    fontSize: 15,
    marginLeft:27,
    fontWeight: "bold",
  },
  event:{
    fontFamily: "Montserrat-SemiBold",
    color: colors.fadedBlack,
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal:10,

  },
  time:{
    fontFamily: "Montserrat-Regular",
    color: colors.fadedBlack,
    fontSize: 13,
    marginHorizontal:10,

  },
  flatlist:{
    marginHorizontal:10,
  }
})
