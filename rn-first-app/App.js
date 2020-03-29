import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homePageHeaderText}>Ration Bytes</Text>

        <Text style={styles.homeLogo}>LOGO</Text>

        <Text style={styles.homeExpireText}>Eat me! Expires soon:</Text>

        <Text style={styles.homeExpireContainer}>"tomato" expires in "5" days</Text>

        <Text style={styles.homeEatText}>What did you eat?</Text>

        <TextInput style = {styles.homeItemContainer}
               placeholder = "Item"
               placeholderTextColor = "#6948f4"
        />

        <TextInput style = {styles.homeAmountContainer}
               placeholder = "Amount"
               placeholderTextColor = "#6948f4"
        />

      </View>
    )
  }
}

class InputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InputScreen</Text>
      </View>
    )
  }
}

class InventoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InventoryScreen</Text>
      </View>
    )
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  homeContainer: {
    padding: 60,
    alignItems: 'center',
  },
  homePageHeaderText: {
    width: '200%',
    fontSize: 50,
    color: '#6948f4',
    textAlign: 'center'
  },
  homeLogo:{
    padding: 50,
  },
  homeExpireText:{
    padding: 50,
    width: '200%',
    fontSize: 25,
    color: '#6948f4',
    textAlign: 'center'
  },
  homeExpireContainer:{
    padding: 30,
    width: '120%',
    fontSize: 20,
    color: '#6948f4',
    textAlign: 'center',
    borderColor: '#6948f4',
    borderWidth: 1
  },
  homeEatText:{
    padding: 40,
    width: '200%',
    fontSize: 25,
    color: '#6948f4',
    textAlign: 'center'
  },
  homeItemContainer:{
    padding: 10,
    height: 30,
    width: '120%',
    margin: 15,
    color: '#6948f4',
    borderColor: '#6948f4',
    borderWidth: 1
  },
  homeAmountContainer:{
    padding: 10,
    height: 30,
    width: '120%',
    margin: 15,
    color: '#6948f4',
    borderColor: '#6948f4',
    borderWidth: 1
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Input: {
      screen: InputScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-add'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      }
    },
    Inventory: {
      screen: InventoryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-archive'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-information-circle-outline'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);