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
          backgroundColor: "rgb(98, 197, 184)",
          marginRight: 10,
          marginLeft: 10
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
      // <View>
      //   style={{

      //   }}
      // </View>
      <View
        style={{
          flex: 1,
          marginRight: 10,
          marginLeft: 10,
          borderColor: "#2c6d6a",
          borderWidth: 3,
          backgroundColor: "white"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#2c6d6a",
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
      data: "",
      refreshing: false
    };
  }
  /*
  forceRemount = () => {
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }));
  };*/

  loadData() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(storeAll());
      }, 1000);
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

  handleRefresh = () => {
    this.loadData().then(data => {
      this.setState({
        data: data
      });
      console.log(this.state.data);
    });
    //this.setState({ data: storeAll() });
  };

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
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        ></SectionList>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   containerOne: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: 'blue',
//     borderWidth: 2,
//   },
// });
