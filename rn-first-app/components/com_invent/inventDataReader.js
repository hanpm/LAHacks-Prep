import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

class InventPage extends Component {
  render() {
    return <Text>{findTotalAmount("tomato")}</Text>;
  }
}

/*
//reads the JSON file and returns it in object form
function readJSON() {
  console.log("Reading data.json");
  let raw = fs.readFileSync(__dirname + "/../../data.json");
  return JSON.parse(raw);
}
*/

//Searches the storage object and object data of the target if it exists
function searchStorage(target) {
  let test = {
    tomato: {
      unit: "whole tomatoes",
      expiration: {
        "3/29/2020": "30",
        "4/20/2020": "15",
        "4/13/2020": "4"
      }
    }
  };

  store = async () => {
    try {
      await AsyncStorage.setItem("inventory", JSON.stringify(test));
    } catch (error) {}
  };
  store();
  console.log("Searching data for " + target);
  target = target.toLowerCase().trim();

  access = async () => {
    try {
      console.log("Asynchronously accessing storage");
      let value = await AsyncStorage.getItem("inventory");
      let storage = JSON.parse(value);

      console.log(storage);
      console.log(Object.keys(storage));
      console.log(Object.values(storage));
      /*
      //loops through all keys to determine a match
      for (i = 0; i < Object.keys(storage).length; i++) {
        
        if (Object.keys(storage)[i] == target) {
          console.log("Found " + Object.keys(storage)[i]);
          return Object.values(storage)[i];
        }
      }

      */

      let item = storage[target];
      if (item != undefined) {
        console.log("Found");
        console.log(item);
        return item;
      }
    } catch (error) {
      console.log(error);
    }
    //when no matching key is found, defaults to undefined
    console.log("Item " + target + " not found");
    return undefined;
  };

  return access();
}

function findTotalAmount(target) {
  console.log("\nBeginning to find total quantity amount of " + target);
  let item = searchStorage(target);
  //error checking, if the item actually exists in storage
  if (item != undefined && item != null) {
    let sum = 0;
    console.log("Summing up amounts");
    //check if there's actual values stored
    if (
      item["expiration"] != undefined &&
      Object.values(item["expiration"]) != undefined
    ) {
      //loop through all values for typical sum finding
      for (i = 0; i < Object.values(item["expiration"]).length; i++) {
        let expireDate = Object.keys(item["expiration"])[i];
        let quantity = Object.values(item["expiration"])[i];

        //removes key:value pair if it is past the expiration date
        if (Date.parse(expireDate) <= Date.now()) {
          console.log("Removed " + expireDate + ", " + quantity + " " + target);
          //delete Object.keys(item["expiration"])[i];
        }
        //otherwise proceed as normal and sum it up
        else {
          sum += parseInt(quantity);
        }
      }
      console.log("Total amount of target " + target + " is " + sum);
      return sum;
    }
  }
  //default to 0 when it doesn't exist
  console.log("No amounts of " + target + " exist");
  return 0;
}

//console.log(findTotalAmount("tomato"));

export default InventPage;
