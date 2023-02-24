import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={"Add todo..."}
      />
      <Button
        title="Add todo"
        color={"green"}
        onPress={() => addHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 20,
  },
  input: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "green",
    color: "green",
    borderWidth: 1,
    marginBottom: 5,
  },
});
