import React , {useState , useEffect} from 'react';
import { View ,FlatList, StyleSheet, Text , ScrollView, Image } from 'react-native'
import CallButton from '../components/CallButton';
import Card from '../components/Card';
import CategorySlider from '../components/CategorySlider'


export default function Home({ navigation }) {
    
    const [listings, setListings] = useState("")
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const categories =  [
      {
      id:"1",
      title:"Top Attractions",
      },
      {
      id:"2",
      title:"Historical Sites",
      },
      {
      id:"3",
      title:"Heritage and Culture",
      }
  ]

    useEffect(() => {
      setLoading(true);
      loadData();
      setLoading(false);
    }, []);
  
    async function loadData() {
      try {
        const response = await fetch("http://138.197.24.211/DGA/web/en/api/home");
        const data = await response.json();
        // console.log(data.data[0].locations)
        setListings(data.data[0].locations);
      } catch (err) {
        setHasError(true);
      }
    }
    
    async function refreshData() {
      try {
        setRefreshing(true);
        const response = await fetch("http://138.197.24.211/DGA/web/en/api/home");
        const data = await response.json();
        setListings(data.data[0].locations);
        setRefreshing(false);
      } catch (err) {
        setHasError(true);
      }
    }
    
    return (
<View style={styles.main}>
      <View style={{flexDirection:"row", alignSelf:"flex-end", marginBottom:25}}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      </View>
      <CategorySlider categoryData={categories}/>
      <FlatList
          style={styles.cardList}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          refreshing={refreshing}
          onRefresh={refreshData}
          renderItem={({ item }) => (
          
            <Card
              title={item.title}
              subTitle={item.visits}
              image={item.image}
              onPress={() => navigation.navigate("ListingDetails", item)}/>
          )}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    main : {
       marginTop: 45,
       backgroundColor:"#fff"
    },
    cardList:{
        marginTop: 10 ,
        marginHorizontal:10,
        marginBottom:80
    },
    logo:{
      width: 100,
      height:100/6,
      marginRight:25
    }
    

})

