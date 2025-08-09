
import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Card from "./Card";



export default function EcoFriendlyAv() {
    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Text style={styles.texty}>Eco-Friendly Aviation</Text>
            </View>

            <Text style={styles.heading}>Commited to <Text style={{color:'gold'}}>Sustainable</Text> Aviation</Text>

            <Text style={styles.desc}>We're pioneering a new era of private aviation that balances luxury with responsibility. Our sustainable initiatives are designed to reduce environmental impact without compromising on the exceptional experience we deliver.</Text>
        
            <View style={styles.cardwrapper}>
                <Card 
                logo="leaf"
                heading="Sustainable Practices"
                desc="We implement eco-friendly practices in every aspect of our operations, from fuel-efficient aircraft to sustainable sourcing of materials."
                bg="#193a2c"
                />

                <Card 
                logo="electricity"
                heading="Electric & Hydrogen Aircraft"
                desc="We're investing in the next generation of electric and hydrogen-powered aircraft for short-range flights."
                bg="#41371c"
                />

                <Card 
                logo="graph"
                heading="Carbon Offset Programs"
                desc="Offset your flight's carbon footprint through our verified carbon reduction projects around the world."
                bg="#1e2d4b"
                />

                <Card 
                logo="globe"
                heading="Blockchain-Verified Green Initiatives"
                desc="Transparent tracking of sustainability efforts through blockchain technology."
                bg="#34244a"
                />
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal: wp('3%')
    },
    box:{
        width:'50%',
        backgroundColor:'lightgreen',
        padding:wp('2%'),
        borderRadius:20
    },
    texty:{
        color:'green',
    },
    heading:{
        marginTop:hp('2%'),
        fontSize:wp('7%'),
        fontWeight:'bold',
        color:'black',
        marginBottom:hp('1%'),
        
    },
    desc:{
        fontSize:wp('4%'),
        color:'black',
        textAlign:'justify',
        marginVertical:hp('2%'),
        color:'grey',
        paddingRight: wp('10%'),
    },
    cardwrapper:{
        marginTop:hp('2%'),
        marginBottom:hp('5%'),
        width: '100%',
        
    }
})