import React, { Component } from "react";
import { SectionList, Text, View, Platform } from "react-native";
import { storeAll, findTotaly, findTotalr } from "./inventDataReader";

//subbars under the headers
class SectionListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "rgb(98, 197, 184)"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "rgb(173, 252, 250)",
            marginLeft: 20,
            marginRight: 10
          }}
        >
          Expires on {this.props.item.expiration}!
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginRight: 10,
            color: "rgb(173, 252, 250)"
          }}
        >
          {this.props.item.quantity} {this.props.item.unit}
        </Text>
        <View
          style={{
            backgroundColor: "rgb(77,120, 140)",
            height: 1,
            margin: 4,
            marginLeft: 20,
            marginRight: 10
          }}
        ></View>
      </View>
    );
  }
}

//big headers
class SectionHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(77,120, 140)"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            margin: 20
          }}
        >
          {this.props.section.title}
        </Text>
      </View>
    );
  }
}
export default class BasicSectionList extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: "initial",
      data: ""
    };
  }
  
  loadData() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(storeAll());
      }, 5000);
    });

    return promise;
  }

  componentDidMount() {
    this.setState({ loading: "true" });
    this.loadData().then(data => {
      this.setState({
        data: data,
        loading: "false"
      });
      console.log(this.state.data);
    });
  }

  render() {
    if (this.state.loading === "initial") {
      console.log("Initializing");
      return <Text h2>Intializing...</Text>;
    }

    if (this.state.loading === "true") {
      console.log("Loading");
      return <Text h2>Loading...</Text>;
    }

    console.log("Loaded");
    console.log(this.state.data);
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 34 : 0 }}>
        <SectionList
          renderItem={({ item, index }) => {
            return (
              <SectionListItem item={item} index={index}></SectionListItem>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <SectionHeader section={section} />;
          }}
          sections={this.state.data}
          keyExtractor={(item, index) => item.expiration}
        ></SectionList>
      </View>
    );
  }
}
