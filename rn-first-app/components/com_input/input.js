import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class InputScreen extends React.Component {
  state = {
    item: "",
    amount: ""
  };
  handleItem = text => {
    this.setState({ item: text });
  };
  handleAmount = text => {
    this.setState({ amount: text });
  };
  message = (item, pass) => {
    alert("item: " + item + "," + " amount: " + pass);
  };
  render() {
    return (
      <View style={stylesOne.container}>
        {/* <Text style = {stylesOne.headerInputText}>Input Inventory</Text> */}
        <TextInput
          style={stylesOne.input}
          //  underlineColorAndroid = "transparent"

          placeholder="  Item"
          placeholderTextColor="#2163f6"
          autoCapitalize="none"
          onChangeText={this.handleItem}
        />

        <TextInput
          style={stylesOne.input}
          //  underlineColorAndroid = "transparent"
          placeholder="  Amount"
          placeholderTextColor="#2163f6"
          autoCapitalize="none"
          onChangeText={this.handleAmount}
        />

        <TouchableOpacity
          style={stylesOne.submitButton}
          onPress={() => this.message(this.state.item, this.state.amount)}
        >
          <Text style={stylesOne.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// export InputScreen
// took this line out and it works without it so wackkk

// this is the styling for the input page
const stylesOne = StyleSheet.create({
  container: {
    marginTop: 250,
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#2163f6",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#2163f6",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }

  //trying to add header --> ignore for now
  // headerInputText: {
  //   color: 'black',
  //   fontSize: 20,
  // }
});
