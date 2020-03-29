import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={stylesAbout.containerAbout}>
        <View>
          <Image
            style={{
              marginTop: 30,
              height: 150,
              width: 150,
              marginBottom: 50
            }}
            source={require("../../assets/icon.png")}
          />
        </View>
        <Text
          style={{
            color: "#d13560",
            fontSize: 30,
            fontWeight: "bold"

            // borderColor: 'blue',
            // borderWidth: 1,
          }}
        >
          Quaranteam
        </Text>
        <View style={stylesAbout.containerItem}>
          <Text style={stylesAbout.textStyling}>
            With limited resources and self-quarantining become the new norm, we
            have decided to help our community through our app, Ration Bytes.
            Here, we ration, remind, and manage your resources so you have one
            less thing to worry about!
          </Text>
        </View>
        <Text
          style={{
            // marginTop: 40,
            color: "#d13560",
            fontSize: 30,
            fontWeight: "bold"

            // borderColor: 'blue',
            //   borderWidth: 1,
          }}
        >
          Purpose
        </Text>
        <View style={stylesAbout.containerItem}>
          <Text style={stylesAbout.textStyling}>
            The purpose of this app is to approximate how much food they have
            left to last through pandemics or natural disasters such as the
            corona virus.
          </Text>
        </View>
      </View>
    );
  }
}

const stylesAbout = StyleSheet.create({
  containerAbout: {
    // marginTop: 100,
    borderColor: "green",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderColor: 'blue',
  //   borderWidth: 1,

  // },
  containerItem: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    marginTop: -40,
    width: 400,
    height: 200
    // margin: 20,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  textStyling: {
    color: "#d13560",
    fontSize: 18,
    justifyContent: "center",
    flexWrap: "wrap",
    // alignItems: 'center',
    textAlign: "center",
    paddingTop: -20
    // margin: 10,
    // marginTop: -10,
  }
});
