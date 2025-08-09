import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

export default function Card({logo, heading, desc,bg}) {

    const icons={
        leaf:<FontAwesome name="leaf" color="#22c55e" size={24} />,
        electricity:<MaterialIcons name="electric-bolt" color="#eab308" size={24} />,
        graph:<Foundation name="graph-bar" color="#3b82f6" size={24} />,
        globe:<FontAwesome name="globe" color="#a855f7" size={24} />
    }
    return (
        <View style={styles.card}>
            <View style={[styles.logo, {backgroundColor:bg}]}>
                {icons[logo]}
            </View>
            <View style={styles.content}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width: wp('90%'),
        flexDirection:'row',
        marginVertical:hp('2%'),
    },
    logo: {
        width: wp('10%'),
        height: wp('10%'),
        padding: wp('2%'),
        marginRight: wp('3%'),
        borderRadius: 10,
        alignItems: 'center',
    },  
    content:{
        flex: 1,
        justifyContent: 'center',
    },
    heading:{
        fontWeight:'bold',
        fontSize:wp('5%'),
        color:'black',
        marginBottom: hp('1%'),
        paddingRight: wp('10%'),
    },
    desc:{
        fontSize:wp('4%'),
        color:'grey',
        marginTop:hp('1%'),
        marginRight:wp('20%'),
    }

})