import input_style from "./input_style.js";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Old Message");
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <Text>Item: </Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <Button
        title="Add"
        onPress={() => setOutputText("the text changed!")}
      />

      <Text>{outputText}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});