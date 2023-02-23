import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  const handleButton = () => console.log("Button clicked");

  const handleButtonPress = () =>
    Alert.alert("PushMessage", "Are you ready?", [
      { text: "Yeah" },
      { text: "No" },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello {"\n"}motherfuckers!!!</Text>
      <Text numberOfLines={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. {"\n"}Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Button title="Press" color="red" onPress={handleButton} />
      <Button
        title="Press again dude"
        color="green"
        onPress={handleButtonPress}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    color: "blue",
    fontSize: "30px",
  },
  // button: {
  //   width: "200px",
  // },
});
