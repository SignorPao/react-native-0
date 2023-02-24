import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function List({ elem, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(elem.key)}>
      <Text style={styles.text}>{elem.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    margin: 5,
  },
});
