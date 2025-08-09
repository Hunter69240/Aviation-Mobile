import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function WhyChooseUs(){
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.texty}>Why Choose Us</Text>
            </View>

            <Text style={styles.heading}>Elevating Private Aviation</Text> 

            <Text style={styles.desc}>
                Experience the pinnacle of private jet travel with our cutting-edge technology, exceptional
                service, and unwavering commitment to safety and sustainability.
            </Text> 

            
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
        
    },
    desc:{
        textAlign:'center',
        letterSpacing:2,
        width:wp('85%')
    }
})