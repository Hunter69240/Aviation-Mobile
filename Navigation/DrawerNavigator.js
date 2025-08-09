import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from 'react-native-safe-area-context';


import Home from "../screens/Home";

import Header from "../components/Header";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition: "right",
        header: () => <Header navigation={navigation} title="App Name" />,
      })}
    >
      {/* Hidden from drawer by drawerItemStyle */}
      <Drawer.Screen
        name="Home"
        component={Home}
        
      />
      
    </Drawer.Navigator>
    </SafeAreaView>
  );
}
