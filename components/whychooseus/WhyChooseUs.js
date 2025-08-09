import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Card from "./Card";


export default function WhyChooseUs(){
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.texty}>Why Choose Us</Text>
            </View>

            <Text style={styles.heading}>Elevating <Text style={{color:'#dec078'}}>Private Aviation</Text></Text> 

            <Text style={styles.desc}>
                Experience the pinnacle of private jet travel with our cutting-edge technology, exceptional
                service, and unwavering commitment to safety and sustainability.
            </Text> 

            <View style={styles.wrapper}>
                <Card 
                icon="shield"
                heading="Uncompromised Safety"
                desc="Our aircraft adhere to the most stringent safety standards with regular maintenance checks and experienced crew."
                />

                <Card 
                icon="clock"
                heading="Time Efficiency"
                desc="Skip long security lines and wait times. Arrive minutes before your flight and depart on your schedule."
                />

                <Card 
                icon="plane"
                heading="Aircraft Variety"
                desc="From light jets to ultra-long-range aircraft, choose the perfect match for your journey's requirements."
                />

                <Card 
                icon="card"
                heading="Transparent Pricing"
                desc="No hidden fees or surprise costs. Our pricing is straightforward and competitive for the value provided."
                />

                <Card 
                icon="leaf"
                heading="Sustainable Options"
                desc="Choose eco-friendly alternatives with our carbon offset program and Sustainable Aviation Fuel options."
                />

                <Card 
                icon="headphone"
                heading="24/7 Concierge"
                desc="Our dedicated team is available around the clock to assist with any requests or changes to your itinerary."
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    texty:{
        color:'#DAB33E'
    },
    box:{
        width:'50%',
        backgroundColor:'#4B3F0B',
        padding:wp('2%'),
        borderRadius:10
    },
    heading:{
        fontSize:hp('3%'),
        marginTop:20
    },
    desc:{
        textAlign:'center',
        letterSpacing:2,
        width:wp('85%'),
        marginTop:20,
        color:'grey'
    }
})