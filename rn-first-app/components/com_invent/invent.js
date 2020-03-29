import React, { Component } from "react";
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Platform
} from "react-native";
import { storeAll } from "./inventDataReader";
import listData from "./inventFileData";

export class SectionListItem extends Component {
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
          {this.props.item.content.expiration}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginRight: 10,
            color: rgb(173, 252, 250)
          }}
        >
          {this.props.item.content.quantity}
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

export class SectionHeader extends Component {
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
  /*async componentDidMount() {
    listData = await storeAll();
    console.log("List data loaded");
    console.log(listData);
  }*/

  render() {
    return (
      <SafeAreaView styles={{ flex: 1 }}>
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
          keyExtractor={(item, index) => item.content.expiration}
        ></SectionList>
      </SafeAreaView>
    );
  }
}
