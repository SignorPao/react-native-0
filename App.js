import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello {"\n"}motherfuckers!!!</Text>
      <Text numberOfLines={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. {"\n"}Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    color: "blue",
    fontSize: "30px",
  },
});
