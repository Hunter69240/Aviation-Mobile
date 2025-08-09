import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})