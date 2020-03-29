import input_style from "./input_style.js";
import inputData from "./inputData.js";
import { saveItem } from './inputData.js'
import React, { useState, Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export class InputScreen extends React.Component {

  state = {
    item: '',
    amount: ''
  }

  handleItem = (text) => {
    this.setState({ item: text });
  }

  handleAmount = (text) => {
    this.setState({ amount: text });
  }

  message = (item, amount) => {
    alert('item: ' + item + ',' + ' amount: ' + amount + " has been added to inventory");
    let newItem = new Item(item, "unit", amount);
    saveItem(item, newItem);
  }

  render() {
    return (
      <View style={stylesOne.container}> 
        {/* <Text style = {stylesOne.headerInputText}>Input Inventory</Text> */}
        <TextInput style = {stylesOne.input}
              //  underlineColorAndroid = "transparent"
            
               placeholder = "  Item"
               placeholderTextColor = "#2163f6"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>
            
            <TextInput style = {stylesOne.input}
              //  underlineColorAndroid = "transparent"
               placeholder = "  Amount"
               placeholderTextColor = "#2163f6"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}/>
            
            <TouchableOpacity
               style = {stylesOne.submitButton}
               onPress = {
                  () => this.message(this.state.item, this.state.amount)
               }>
               <Text style = {stylesOne.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
    )
  }
};

// example:
// Item(eggs, eggs, 20);
class Item {
  constructor(item_type, item_unit, amount) {
    this.item_type = item_type;
    this.item_unit = item_unit;
    this.amount = amount;
  }
}

export {newItem};
// export default InputPage;


const stylesOne = StyleSheet.create({
  container: {
    marginTop: 250,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#2163f6',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#2163f6',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  },

});