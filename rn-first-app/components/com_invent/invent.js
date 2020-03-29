import React, { Component } from "react";
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform
} from "react-native";
import { storeAll } from "./inventDataReader";

var listData;

class SectionListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "blue"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "black",
            marginLeft: 20,
            marginRight: 10
          }}
        >
          {this.props.item.content.expiration}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginRight: 10
          }}
        >
          {this.props.item.content.quantity}
        </Text>
      </View>
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "dark blue"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            marginLeft: 20,
            marginRight: 10
          }}
        >
          {this.props.section.title}
        </Text>
      </View>
    );
  }
}

export default class InventSectionList extends Component {
  async componentDidMount() {
    listData = await storeAll();
    console.log("List data loaded");
    console.log(listData);
  }

  render() {
    console.log("too late");
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
          sections={listData}
          keyExtractor={(item, index) => item.unit}
        >
          onRefresh = {(listData = storeAll())}
        </SectionList>
      </View>
    );
  }
}
