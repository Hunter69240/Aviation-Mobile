import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList,ImageBackground,StyleSheet,Image,TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function FlightsScreen() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  };

  const getDuration = (departure, arrival) => {
  const dep = new Date(departure);
  const arr = new Date(arrival);

  const diffMs = arr - dep; // difference in milliseconds
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${diffHrs}h ${diffMins}m`;
  };

  useEffect(() => {
    fetch("http://10.172.43.222:5000/flights")

      .then((res) => res.json())
      .then((data) => {
        setFlights(data.routes); // accessing routes array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    
    
      <ImageBackground
            source={require("../assets/Images/Bg-Image.jpg")}
            style={styles.background}
            imageStyle={{ opacity: 0.4 }} 
      >
            <Text style={styles.heading}>Available Flights</Text>
            <FlatList
             data={flights}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image 
                    style={styles.cardImage}
                    source={{
                      uri: item.image || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80'
                    }}
                    resizeMode="cover"
                  />
                  <Text style={styles.flightname}>{item.aircraft.type}</Text>
                  <Text style={styles.flighttype}>{item.aircraft.operator}</Text>
                  <Text style={styles.cardText}>
                    {item.departure.airport} <AntDesign name="arrowright" color="#000" size={24} /> {item.arrival.airport}
                  </Text>
  
                  <Text style={styles.timings}>Departure:{formatDateTime(item.departure.time)}</Text>
                  <Text style={styles.timings}>Arrival:{formatDateTime(item.arrival.time)}</Text>
  
                  <Text style={styles.timings}>Duration: {getDuration(item.departure.time, item.arrival.time)}</Text>
  
                  <Text style={styles.price}>Price: <Text style={styles.amount}>${item.price.total}</Text></Text>
  
                  <TouchableOpacity style={styles.booknow}>
                    <Text style={styles.text}>Book Now</Text>
                  </TouchableOpacity>
                </View>
             )}
            />
            

      </ImageBackground>
      
    
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  heading:{
    fontSize: wp('8%'),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical:hp('3%'),
    color:'black'
  },
  card: {
  backgroundColor: '#fff',
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
  width: wp('90%'),
  overflow: "hidden",   // ensures rounded corners apply to image
},
cardImage: {
  width: "100%",
  height: hp('20%'),
},
cardText: {
  padding: 10,
  fontSize: 16,
  textAlign: "center",
  fontWeight: "bold",
  marginBottom:hp('2%'),
  marginTop:hp('1%')
},
timings:{
  padding: 5,
  fontSize: 14,
  textAlign: "center",
  marginBottom:hp('1%') 
},
flightname:{
  fontSize: wp('6%'),
  fontWeight: "bold",
  marginLeft:wp('5%'),
  marginTop:hp('2%')
},
flighttype:{
  fontSize: wp('4%'),
  marginLeft:wp('5%'),
  marginBottom:hp('1%'),
  marginTop:hp('3%')
},
price:{
  marginTop:hp('2%'),
  fontSize: wp('5%'),
  marginLeft:wp('5%'),
  marginBottom:hp('2%')
},
amount:{
  fontWeight: "bold",
  fontSize: wp('7%'),
  color:'#6a73da'
},
booknow:{
  backgroundColor: '#0ea271',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  marginBottom:hp('2%'),
  marginHorizontal:wp('20%')
}
})
