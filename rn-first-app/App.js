import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import BasicSectionList from "./components/com_invent/invent";
import HomeScreen from "./components/com_home/home";
import AboutScreen from "./components/com_about/about";

// adding the input and alert into InputScreen
class InputScreen extends React.Component {
  state = {
    item: "",
    amount: "",
    month: "",
    day: "",
    year: ""
  };
  handleItem = text => {
    this.setState({ item: text });
  };
  handleAmount = text => {
    this.setState({ amount: text });
  };

  handleMonth = text => {
    this.setState({ month: text });
  };
  handleDay = text => {
    this.setState({ day: text });
  };
  handleYear = text => {
    this.setState({ year: text });
  };

  message = (item, amount, month, day, year) => {
    alert(
      "item: " +
        item +
        "," +
        " amount: " +
        amount +
        "," +
        " date: " +
        month +
        "/" +
        day +
        "/" +
        year
    );
  };

  render() {
    return (
      <View style={stylesOne.container}>
        <Text style={stylesOne.headerTitleText}>Food Input</Text>
        {/* <Text style = {stylesOne.headerInputText}>Input Inventory</Text> */}
        <TextInput
          style={stylesOne.input}
          placeholder="  Item"
          placeholderTextColor="#2163f6"
          autoCapitalize="none"
          onChangeText={this.handleItem}
        />
        <TextInput
          style={stylesOne.input}
          placeholder="  Amount"
          placeholderTextColor="#2163f6"
          autoCapitalize="none"
          onChangeText={this.handleAmount}
        />

        <Text style={stylesOne.headerExpirationText}>Expiration Date</Text>

        <View style={stylesOne.containerDate}>
          <View style={stylesOne.containerItem}>
            <TextInput
              style={stylesOne.inputOne}
              placeholder="  Month"
              placeholderTextColor="#2163f6"
              autoCapitalize="none"
              onChangeText={this.handleMonth}
            />
          </View>
          <View style={stylesOne.containerItem}>
            <TextInput
              style={stylesOne.inputOne}
              placeholder="  Day"
              placeholderTextColor="#2163f6"
              autoCapitalize="none"
              onChangeText={this.handleDay}
            />
          </View>
          <View style={stylesOne.containerItem}>
            <TextInput
              style={stylesOne.inputOne}
              placeholder="  Year"
              placeholderTextColor="#2163f6"
              autoCapitalize="none"
              onChangeText={this.handleYear}
            />
          </View>
        </View>

        <TouchableOpacity
          style={stylesOne.submitButton}
          onPress={() =>
            this.message(
              this.state.item,
              this.state.amount,
              this.state.month,
              this.state.day,
              this.state.year
            )
          }
        >
          <Text style={stylesOne.submitButtonText}> ⇨ Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// this is the styling for the input page
const stylesOne = StyleSheet.create({
  container: {
    marginTop: 100,
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  },
  containerDate: {
    display: "flex",
    // flexWrap: 'wrap',
    justifyContent: "space-between",
    // alignContent: 'space-between',
    flexDirection: "row"
    // borderColor: 'blue',
    // borderWidth: 1,
  },

  containerItem: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    // alignItems: 'center',
    borderColor: "blue",
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 25
    // borderRadius: 10,
  },

  headerTitleText: {
    color: "#2163f6",
    fontSize: 25,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  headerExpirationText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 40,
    marginBottom: -2,
    margin: 15,
    color: "#2163f6",
    fontSize: 25,
    fontWeight: "bold"
  },

  input: {
    margin: 15,
    height: 30,
    borderColor: "#2163f6",
    borderWidth: 1
  },

  inputOne: {
    alignItems: "center",
    height: 40,
    width: 50,
    borderColor: "#2163f6"
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2163f6",
    padding: 10,
    marginLeft: 35,
    marginRight: 35,

    height: 40,
    //  width: 300,
    borderRadius: 20
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        )
      }
    },
    Input: {
      screen: InputScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-add"} />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#a3c2fa",
        barStyle: { backgroundColor: "#2163f6" }
      }
    },
    Inventory: {
      screen: BasicSectionList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-archive"}
            />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#92c5c2",
        barStyle: { backgroundColor: "#2c6d6a" }
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-information-circle-outline"}
            />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#ebaabd",
        barStyle: { backgroundColor: "#d13560" }
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#ffffff",
    inactiveColor: "#bda1f7",
    barStyle: { backgroundColor: "#6948f4" }
  }
);

export default createAppContainer(TabNavigator);
