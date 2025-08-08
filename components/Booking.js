import  react from 'react';
import { View, Text, StyleSheet } from "react-native";
export default function Booking() {
  return (
    <View style={styles.container}>
      <Text>Booking Screen rectangle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  }});