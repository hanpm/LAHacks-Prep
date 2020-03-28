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

async () => {
  try {
    await AsyncStorage.setItem("inventory", {
      "test-type": {
        unit: null,
        expiration: {
          date: "amount"
        }
      },
      tomato: {
        unit: "whole tomatoes",
        expiration: {
          "3/29/2020": "30",
          "4/20/2020": "15",
          "4/13/2020": "4",
          null: "40"
        }
      }
    });
  } catch (error) {}
};

//Searches the storage object and object data of the target if it exists
function searchStorage(target) {
  let storage = async () => {
    try {
      const value = await AsyncStorage.getItem("inventory");
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {}
  };

  console.log("Searching data for " + target);
  target = target.toLowerCase().trim();

  //loops through all keys to determine a match
  for (i = 0; i < Object.keys(storage).length; i++) {
    if (Object.keys(storage)[i] == target) {
      console.log("Found " + Object.keys(storage)[i]);
      return Object.values(storage)[i];
    }
  }
  //when no matching key is found, defaults to undefined
  console.log("Item " + target + " not found");
  return undefined;
}

function findTotalAmount(target) {
  console.log("\nBeginning to find total quantity amount of " + target);
  let item = searchStorage(target);
  //error checking, if the item actually exists in storage
  if (item != undefined) {
    let sum = 0;
    console.log("Summing up amounts");
    //check if there's actual values stored
    if (Object.values(item["expiration"]) != undefined) {
      //loop through all values for typical sum finding
      for (i = 0; i < Object.values(item["expiration"]).length; i++) {
        let expireDate = Object.keys(item["expiration"])[i];
        let quantity = Object.values(item["expiration"])[i];

        //removes key:value pair if it is past the expiration date
        if (Date.parse(expireDate) <= Date.now()) {
          console.log("Removed " + expireDate + ", " + quantity + " " + target);
          delete Object.keys(item["expiration"])[i];
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
