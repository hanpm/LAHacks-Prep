import input_style from "./input_style.js";
import inputData from "./inputData.js";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export class InputScreen extends React.Component {
  state = {
    item: '',
    amount: ''
  }
  handleItem = (text) => {
    this.setState({ item: text })
  }
  handleAmount = (text) => {
    this.setState({ amount: text })
  }
  message = (item, pass) => {
    alert('item: ' + item + ',' + ' amount: ' + pass)
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


let testArr = {

  "tomato": {
    unit: "whole tomatoes",

    expiration: {
      "date1": "30",
      "Date2": "21"
    }

  }
};

saveItem(eggs, 20);

function saveItem(item_type, item_unit, amount){

  var newItem = {
    unit: item_unit, //units: eggs
    amnt: amount //amount: 20
  };

  testArr[item_type] = newItem;

};

export default InputPage;

// export default function App() {
//   const [outputText, setOutputText] = useState("Old Message");
//   const [value, onChangeText] = React.useState('Useless Placeholder');

//   return (
//     <View style={styles.container}>
//       <Text>Item: </Text>
//       <TextInput
//       style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
//       onChangeText={text => onChangeText(text)}
//       value={value}
//     />

//     <Button
//         title="Add"
//         onPress={() => setOutputText("the text changed!")}
//       />

//       <Text>{outputText}</Text>
      
//     </View>
//   );
// }

// this is the styling for the input page
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