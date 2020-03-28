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
/*
listData = {
  data: {
    {
      itemName: "Tomato",
      unit: "oz",
      expiration: {

      }
    }
  },
  title: "Ration Inventory"
}
*/

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
          {" "}
          {this.props.item.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginRight: 10
          }}
        >
          {" "}
          {this.props.item.description}
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
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          renderItem={({ item, index }) => {
            return (
              <SectionListItem item={item} index={index}></SectionListItem>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <SectionHeader section={section} />;
          }}
          keyExtractor={(item, index) => item.name}
        >
          onRefresh = {{}}
        </SectionList>
      </View>
    );
  }
}
