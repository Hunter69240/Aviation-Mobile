import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Booking from "../components/Booking";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import EcoFriendlyAv from "../components/EcoFriendlyAv/EcoFriendlyAv";
import Footer from "../components/Footer";

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require("../assets/Images/Bg-Image.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }} 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.maintxt}>
          <Text style={styles.text}>
            One-Stop Destination for Private Jets
          </Text>
        </View>

        <View style={styles.Wrapper}>
          <Booking style={styles.booking}/>
        </View>
        
        <View style={styles.Wrapper}>
          <WhyChooseUs/>
        </View>

        <View style={styles.LWrapper}>
          <EcoFriendlyAv />
        </View>

         <View style={styles.LWrapper}>
          <Footer navigation={navigation}/>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    paddingVertical: hp('5%'),  // optional vertical padding inside ScrollView
    alignItems: 'center',       // center children horizontally
  },
  maintxt: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginVertical:hp('7%')
  },
  
  text: {
    color: 'white',
    fontSize: wp('8%'),
    textAlign: 'center',
    fontWeight:'bold'
  },
  Wrapper:{
    marginVertical:hp('5%'),
    alignItems:'center',
  },
  LWrapper:{
    marginVertical:hp('5%'),
    alignItems:'flex-start',
    width: '100%',
    marginLeft: wp('10%'),
  }
  
});
