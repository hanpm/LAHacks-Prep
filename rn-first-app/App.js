import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import InventSectionList from "./components/com_invent/invent";
import InventPage from "./components/com_invent/inventDataReader";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

class InventoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InventoryScreen</Text>
      </View>
    );
  }
}

class InputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InputScreen</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
      screen: InventSectionList,
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
