import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,

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
  state = {
    subitem: '',
    subamount: '',
  }

  handleItem = (text) => {
    this.setState({ subitem: text })
  }
  handleAmount = (text) => {
    this.setState({ subamount: text })
  }

  message = (subitem, subamount) => {
    alert('current item: ' + subitem + ',' + ' current amount: ' + subamount)
  }

  render() {
    return (
      <View style={stylesHome.homeContainer}>
        <Text style={stylesHome.homePageHeaderText}>Ration Bytes</Text>
        <View>
          <Image 
            style={{
              height: 150,
              width: 150,
              marginBottom: 10,
            }}
            source={require('./assets/icon.png')}
          />
        </View>
        <Text style={stylesHome.homeExpireText}>Expires soon</Text>

        <Text style={stylesHome.homeExpireContainer}>"tomato" expires in "5" days</Text>

        <Text style={stylesHome.homeEatText}>What did you eat?</Text>

        <TextInput style = {stylesHome.homeItemContainer}
               placeholder = "  Item"
               placeholderTextColor = "#6948f4"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}
        />

        <TextInput style = {stylesHome.homeAmountContainer}
               placeholder = "  Amount"
               placeholderTextColor = "#6948f4"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}
        />
        <TouchableOpacity
               style = {stylesHome.submitButton}
               onPress = {
                  () => this.message(this.state.subitem, this.state.subamount)
               }>
               
               <Text style = {stylesHome.submitButtonText}> ⇨ Submit </Text>
              
            </TouchableOpacity>

      </View>
    )
  }
}

// adding the input and alert into InputScreen
class InputScreen extends React.Component {
  state = {
    item: '',
    amount: '',
    month: '',
    day: '', 
    year:''
  }
  handleItem = (text) => {
    this.setState({ item: text })
  }
  handleAmount = (text) => {
    this.setState({ amount: text })
  }

  handleMonth = (text) => {
    this.setState({ month: text})
  }
  handleDay = (text) => {
    this.setState({ day: text})
  }
  handleYear = (text) => {
    this.setState({ year: text})
  }

  message = (item, amount, month, day, year) => {
    alert('item: ' + item + ',' + ' amount: ' + amount +  "," + " date: " + month + "/" + day + '/' + year)
  }
  
  render() {
    return (
      
      <View style={stylesOne.container}> 
      <Text style= {stylesOne.headerTitleText}>Food Input</Text>
        {/* <Text style = {stylesOne.headerInputText}>Input Inventory</Text> */}
        <TextInput style = {stylesOne.input}
               placeholder = "  Item"
               placeholderTextColor = "#2163f6"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>
            <TextInput style = {stylesOne.input}
               placeholder = "  Amount"
               placeholderTextColor = "#2163f6"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}/>
              
           <Text style= {stylesOne.headerExpirationText}>Expiration Date</Text>
           
          <View style ={stylesOne.containerDate}>
              <View style= {stylesOne.containerItem}>
              <TextInput style = {stylesOne.inputOne}
                     placeholder = "  Month"
                     placeholderTextColor = "#2163f6"
                     autoCapitalize = "none"
                     onChangeText = {this.handleMonth}/>
                  </View>   
              <View style = {stylesOne.containerItem}>
                    <TextInput style = {stylesOne.inputOne}
                      placeholder = "  Day"
                      placeholderTextColor = "#2163f6"
                      autoCapitalize = "none"
                      onChangeText = {this.handleDay}/>
                    </View>
              <View style = {stylesOne.containerItem}>
                  <TextInput style = {stylesOne.inputOne}
                     placeholder = "  Year"
                     placeholderTextColor = "#2163f6"
                     autoCapitalize = "none"
                     onChangeText = {this.handleYear}/>
              </View>
            </View>
            
            <TouchableOpacity
               style = {stylesOne.submitButton}
               onPress = {
                  () => this.message(this.state.item, this.state.amount, this.state.month, this.state.day, this.state.year)
               }>
               
               <Text style = {stylesOne.submitButtonText}> ⇨ Submit </Text>
              
            </TouchableOpacity>
      </View>
    )
  }
}
// export InputScreen
// took this line out and it works without it so wackkk

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
        <View style={stylesAbout.containerAbout}>

      <View>
          <Image 
            style={{
              marginTop: 30,
              height: 150,
              width: 150,
              marginBottom: 50,
            }}
            source={require('./assets/icon.png')}
          />
        </View>
          <Text style={{
            color: '#d13560',
            fontSize: 30,
            fontWeight: 'bold',

              // borderColor: 'blue',
              // borderWidth: 1,
          }}>Quaranteam</Text>
            <View style={stylesAbout.containerItem}>
              <Text style={stylesAbout.textStyling}>With limited resources and self-quarantining become the new norm, we have decided to help our community through our app, Ration Bytes. Here, we ration, remind, and manage your resources so you have one less thing to worry about!</Text>
    
            </View>
            <Text style={{
            // marginTop: 40,
            color: '#d13560',
            fontSize: 30,
            fontWeight: 'bold',


              // borderColor: 'blue',
              //   borderWidth: 1,
          }}>Purpose</Text>
            <View style={stylesAbout.containerItem}>
            <Text style={stylesAbout.textStyling}>The purpose of this app is to approximate how much food they have left to last through pandemics or natural disasters such as the corona virus.</Text>
            </View>
        </View>
  
    )
  }
}

// this is the temporary styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const stylesAbout = StyleSheet.create({



  containerAbout: {
    // marginTop: 100,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%', 

   
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
   justifyContent: 'space-around',
   flexDirection: 'column',
   marginTop: -40,
   width: 400,
   height: 200,
    // margin: 20,
    // borderColor: 'blue',
    // borderWidth: 1,
   
  },
  textStyling: {
    color: '#d13560',
    fontSize: 18,
    justifyContent: 'center',
    flexWrap: 'wrap',
    // alignItems: 'center',
    textAlign: 'center',
    paddingTop: -20,
    // margin: 10,
    // marginTop: -10,

  },
});


const stylesHome = StyleSheet.create({
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
    // width: '200%',
    marginTop: -35,
    // borderColor: 'blue',
    // borderWidth: 1,
    fontSize: 45,
    color: '#6948f4',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  homeLogo:{
    // padding: 50,
  },
  homeExpireText:{
    // padding: 50,
    marginBottom: 10,
    width: '200%',
    fontSize: 25,
    color: '#6948f4',
    textAlign: 'center',
    fontWeight: 'bold',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  homeExpireContainer:{
    padding: 7,
    marginBottom: 5,
    width: '120%',
    fontSize: 25,
    color: '#6948f4',
    textAlign: 'center',
    borderColor: '#6948f4',
    borderWidth: 1
  },
  homeEatText:{
    // padding: 40,
    marginTop: 10,
    marginBottom: -8,
    width: '200%',
    fontSize: 25,
    color: '#6948f4',
    textAlign: 'center',
    fontWeight: 'bold',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  homeItemContainer:{
    // padding: 10,
    // marginLeft: 5,
    height: 30,
    width: '120%',
    margin: 15,
    color: '#6948f4',
    borderColor: '#6948f4',
    borderWidth: 1
  },
  homeAmountContainer:{
    // padding: 10,
    height: 30,
    width: '120%',
    margin: 15,
    color: '#6948f4',
    borderColor: '#6948f4',
    borderWidth: 1
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
     backgroundColor: '#6948f4',
     marginTop: 10,
     height: 40,
     width: 300, 
     borderRadius: 20,
  
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center',

  },
});



// this is the styling for the input page
const stylesOne = StyleSheet.create({
  container: {
    marginTop: 100,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',

  },
  containerDate: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    flexDirection: 'row',
    // borderColor: 'blue',
    // borderWidth: 1,

  },


  containerItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: "row",
    // alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 25,
    // borderRadius: 10,
  },

  headerTitleText: {
    color: '#2163f6',
    fontSize: 25,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center'
  
  },

  headerExpirationText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center',
    marginTop: 40,
    marginBottom: -2,
    margin: 15,
    color:'#2163f6',
    fontSize: 25,
    fontWeight: 'bold',
    
  },


  input: {
     margin: 15,
     height: 30,
     borderColor: '#2163f6',
     borderWidth: 1
  },

  inputOne: {
    alignItems: "center",
    height: 40,
    width: 50,
    borderColor: '#2163f6',
 },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
     backgroundColor: '#2163f6',
     padding: 10,
     marginLeft: 35,
     marginRight: 35,
     
     height: 40,
    //  width: 300, 
     borderRadius: 20,

  
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center',

  },
})




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