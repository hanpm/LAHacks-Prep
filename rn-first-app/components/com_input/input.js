import input_style from "./input_style.js";
import inputData from "./inputData.js";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export class InputPage extends Component{
    render(){
        return(
          <View style = {styles.container}>
            <View style = {styles.textfields}>

              <TextInput style = {styles.input}
                placeholder = "Item"
                keyboardType = "default"
                autoCapitalize = "none"
                autoCorrect = {false}
              />

              <TextInput style = {styles.input}
                placeholder = "Units (lbs, ml, piece)"
                keyboardType = "email-default"
                autoCapitalize = "none"
                autoCorrect = {false}
              />

              <TextInput style = {styles.input}
                placeholder = "Units (lbs, ml, piece)"
                keyboardType = "email-default"
                autoCapitalize = "none"
                autoCorrect = {false}
              />

              <Button 
                title = "Add Item"
                color = "#1abc9c"
                onPress = {() => this.props.navigation.navigate('Register')}
              />

            </View>
          </View>
        )
    }
}

export default InputPage;

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
    padding: 20,
    backgroundColor: "blue",
    alignItems: "stretch",
    justifyContent: "center"
  },

  input: {
    paddingLeft: 20,
    borderRadius: 50,
    fontSize: 20,
    height: 50,
    fontSize: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    color: "#34495e"
  },

  buttoncontainer: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    justifyContent: 'center'
  },

  buttontext: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontSize: 20
  }

});