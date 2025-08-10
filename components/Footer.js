import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';




export default function Footer({navigation}) {

    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL", err));
    };
    
    return (
        <View>
            <Text style={styles.text}>App Name</Text>

            <Text style={styles.desc}>Experience luxury aviation with our premium jet and helicopter charter services. 
                Elevate your journey with efficiency, comfort, and style.
            </Text>

            <View style={styles.socials}>
                <TouchableOpacity onPress={() => openLink("https://www.instagram.com/")}>
                    <Text style={styles.contact}>
                        <AntDesign name="instagram" color="#000" size={24} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink("https://x.com/")}>
                    <Text style={styles.contact}>
                        <AntDesign name="twitter" color="#000" size={24} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink("https://www.linkedin.com/")}>
                    <Text style={styles.contact}>
                       <AntDesign name="linkedin-square" color="#000" size={24} />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.quicklinks}>
                <Text style={styles.linktext}>Quick Links</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.link}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                    <Text style={styles.link}>
                        About Us
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.link}>
                       Sign-In
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
)}

const styles = StyleSheet.create({
    text:{
        fontSize: wp('7%'),
        color: 'black',
        
    },
    desc:{
        marginVertical: hp('2%'),
        lineHeight: 20,
        color: 'black',
        lineSpacing: 1.5,
       
    },

    socials: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20,
    },
    quicklinks: {
        marginTop: hp('3%'),
        gap: 10,
    },
    linktext:{
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: 'black',
    },
    link:{
        fontSize: wp('4%'),
    }
})