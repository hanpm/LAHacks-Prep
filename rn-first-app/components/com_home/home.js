import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homePageHeaderText}>Ration Bytes</Text>

        <Text style={styles.homeLogo}>LOGO</Text>

        <Text style={styles.homeExpireText}>Eat me! Expires soon:</Text>

        <Text style={styles.homeExpireContainer}>
          "tomato" expires in "5" days
        </Text>

        <Text style={styles.homeEatText}>What did you eat?</Text>

        <TextInput
          style={styles.homeItemContainer}
          placeholder="Item"
          placeholderTextColor="#6948f4"
        />

        <TextInput
          style={styles.homeAmountContainer}
          placeholder="Amount"
          placeholderTextColor="#6948f4"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: "200%",
    fontSize: 50,
    color: "#6948f4",
    textAlign: "center"
  },
  homeLogo: {
    padding: 50
  },
  homeExpireText: {
    padding: 50,
    width: "200%",
    fontSize: 25,
    color: "#6948f4",
    textAlign: "center"
  },
  homeExpireContainer: {
    padding: 30,
    width: "120%",
    fontSize: 20,
    color: "#6948f4",
    textAlign: "center",
    borderColor: "#6948f4",
    borderWidth: 1
  },
  homeEatText: {
    padding: 40,
    width: "200%",
    fontSize: 25,
    color: "#6948f4",
    textAlign: "center"
  },
  homeItemContainer: {
    padding: 10,
    height: 30,
    width: "120%",
    margin: 15,
    color: "#6948f4",
    borderColor: "#6948f4",
    borderWidth: 1
  },
  homeAmountContainer: {
    padding: 10,
    height: 30,
    width: "120%",
    margin: 15,
    color: "#6948f4",
    borderColor: "#6948f4",
    borderWidth: 1
  }
});
