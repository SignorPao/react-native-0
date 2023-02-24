import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [list, setList] = useState([
    { key: "0", text: "todo one" },
    { key: "1", text: "todo two" },
    { key: "2", text: "todo three" },
    { key: "3", text: "todo four" },
  ]);

  const addHandler = (text) => {
    setList((list) => {
      return [
        { key: Math.random().toString(36).substring(7), text: text },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter((list) => list.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <List elem={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
