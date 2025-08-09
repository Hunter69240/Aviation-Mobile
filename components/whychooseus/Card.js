import React from "react";
import { View,Text,StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Card(){
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Ionicons name="shield-checkmark-outline" color="yellow" size={29} />
                </View>
                <Text style={styles.text}>Uncompromised Safety</Text>

                <Text style={styles.text}>Our aircraft adhere to the most stringent safety
                    standards with regular maintenance checks and
                    experienced crew.
                </Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        margin:wp('5%'),
        width:wp('90%'),
        backgroundColor:'black'
    },
    text:{
        color:'white'
    },
    logo:{
        backgroundColor:'#3f3927',
        alignSelf:'flex-start',
        marginVertical:10,
        padding:13,
        borderRadius:50
    },
    content:{
        margin:20,
    }
})