import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export default function CustomDropdown({ label, options, selectedValue, onValueChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    onValueChange(item);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setOpen(!open)}
      >
        <Ionicons name="people" color="#000" size={24} />
        <Text style={styles.selectedText}>
          
          {selectedValue ? selectedValue.label : "1"}
        </Text>
        <EvilIcons name="arrow-down" color="#000" size={24} />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdownButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection:'row',
    justifyContent:"space-around"
  },
  selectedText: {
    fontSize: 16,
  },
  dropdown: {
    
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    maxHeight: 150,
    backgroundColor: "white",
  },
  option: {
    padding: 12,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
});
