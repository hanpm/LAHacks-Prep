import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

import { useAmount } from "../com_input/inputData";

export default class HomeScreen extends Component {
  state = {
    subitem: "",
    subamount: ""
  };

  handleItem = text => {
    this.setState({ subitem: text });
  };
  handleAmount = text => {
    this.setState({ subamount: text });
  };

  message = (subitem, subamount) => {
    console.log("BUTTON HAS BEEN PRESSED");
    useAmount(subitem, subamount);
  };

  render() {
    return (
      <View style={stylesHome.homeContainer}>
        <Text style={stylesHome.homePageHeaderText}>Ration Bytes</Text>
        <View>
          <Image
            style={{
              height: 150,
              width: 150,
              marginBottom: 10
            }}
            source={require("../../assets/icon.png")}
          />
        </View>
        <Text style={stylesHome.homeExpireText}>Expires soon</Text>

        <Text style={stylesHome.homeExpireContainer}>
          Tomato expires in 1 day
        </Text>

        <Text style={stylesHome.homeEatText}>What did you eat?</Text>

        <TextInput
          style={stylesHome.homeItemContainer}
          placeholder="  Item"
          placeholderTextColor="#6948f4"
          autoCapitalize="none"
          onChangeText={this.handleItem}
        />

        <TextInput
          style={stylesHome.homeAmountContainer}
          placeholder="  Amount"
          placeholderTextColor="#6948f4"
          autoCapitalize="none"
          onChangeText={this.handleAmount}
        />
        <TouchableOpacity
          style={stylesHome.submitButton}
          onPress={() => this.message(this.state.subitem, this.state.subamount)}
        >
          <Text style={stylesHome.submitButtonText}> ⇨ Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  homeContainer: {
    padding: 60,
    alignItems: "center"
  },

  homePageHeaderText: {
    // width: '200%',
    marginTop: -35,
    // borderColor: 'blue',
    // borderWidth: 1,
    fontSize: 45,
    color: "#6948f4",
    textAlign: "center",
    fontWeight: "bold"
  },
  homeLogo: {
    // padding: 50,
  },
  homeExpireText: {
    // padding: 50,
    marginBottom: 10,
    width: "200%",
    fontSize: 25,
    color: "#6948f4",
    textAlign: "center",
    fontWeight: "bold"
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  homeExpireContainer: {
    padding: 7,
    marginBottom: 5,
    width: "120%",
    fontSize: 25,
    color: "#6948f4",
    textAlign: "center",
    borderColor: "#6948f4",
    borderWidth: 1
  },
  homeEatText: {
    // padding: 40,
    marginTop: 10,
    marginBottom: -8,
    width: "200%",
    fontSize: 25,
    color: "#6948f4",
    textAlign: "center",
    fontWeight: "bold"
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  homeItemContainer: {
    // padding: 10,
    // marginLeft: 5,
    height: 30,
    width: "120%",
    margin: 15,
    color: "#6948f4",
    borderColor: "#6948f4",
    borderWidth: 1
  },
  homeAmountContainer: {
    // padding: 10,
    height: 30,
    width: "120%",
    margin: 15,
    color: "#6948f4",
    borderColor: "#6948f4",
    borderWidth: 1
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6948f4",
    marginTop: 10,
    height: 40,
    width: 300,
    borderRadius: 20
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});
