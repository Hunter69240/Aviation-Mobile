import React from "react";
import { View,Text,StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';


export default function Card({icon, heading, desc}) {

    const iconType={
        shield:<Ionicons name="shield-checkmark-outline" color="yellow" size={29} />,
        clock:<Feather name="clock" color="yellow" size={24} />,
        plane:<SimpleLineIcons name="plane" color="yellow" size={24} />,
        card:<Ionicons name="card-outline" color="yellow" size={24} />,
        leaf:<FontAwesome name="leaf" color="yellow" size={24} />,
        headphone:<Fontisto name="headphone" color="yellow" size={24} />
    }

    return (
        <View style={styles.card}>
            
            <View style={styles.content}>
                <View style={styles.logo}>
                    {iconType[icon]}
                </View>
                <Text style={styles.heading}>{heading}</Text>

                <Text style={styles.desc}>{desc}</Text>
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
    logo:{
        backgroundColor:'#3f3927',
        alignSelf:'flex-start',
        marginVertical:10,
        padding:13,
        borderRadius:50
    },
    content:{
        margin:20,
    },
    heading:{
        color:'white',
        fontSize:hp('2.5%'),
        fontWeight:'bold',
        marginVertical:10
    },
    desc:{
        color:'white',
        fontSize:hp('2%'),
        lineHeight:hp('3%'),
        marginBottom:10
    }
})