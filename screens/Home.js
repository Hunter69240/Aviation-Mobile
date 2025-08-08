import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Booking from "../components/Booking";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/Images/Bg-Image.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }} // optional: dim image
    >
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Booking />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 18,
  },
});
