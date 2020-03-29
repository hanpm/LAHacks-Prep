import input from "./input.js";
import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

export const addItem = async (item_type, item_unit, amount, expiration_date) => {
  console.log("addItem function worked");

  let value = await AsyncStorage.getItem("inventory"); //returns object consisting of all objects
  let storage = JSON.parse(value);

  var newItem = {
    unit: item_unit, //units: eggs
    content: [
      {
        expiration: expiration_date,
        amnt: amount //amount: 20
      }
    ]
  };

  storage[item_type] = newItem;

  console.log("before save data");

  saveData("inventory", storage);

  // testData();
  testGetItem("inventory");
};

export const useAmount = async (key,amount) => {
  try {
    let value = await AsyncStorage.getItem("inventory"); //returns object consisting of all objects
    let storage = JSON.parse(value);
    console.log("checking exists");

    let object;

    if (key in storage) {
        object = storage[key];
        alert("You have used " + key + " units of " + amount);
        console.log("object old amount: " + object.content[0].amnt);
        console.log("object units: " + object.unit);

        let newAmnt = object.content[0].amnt - amount;
        object.content[0].amnt = newAmnt;

        console.log("object new amount: " + object.content[0].amnt);

        saveData("inventory", storage);
        logData(storage);

      } 
      else {
        console.log(storage);
        console.log("object: " + object);
        console.log("object: does not exist");
        alert(key + " does not exist in the inventory.");
      }
   
  } catch (e) {
    console.log(e);
  }
};

const logData = list => {
  for (var key in list) {
    // check if the property/key is defined in the object itself, not in parent
    if (list.hasOwnProperty(key)) {
      console.log(key, list[key]);
      console.log("Log Data function");
    } else {
      console.log("no key");
    }
  }
};

const saveData = async (item_name, object) => {
  console.log("big brain");
  try {
    console.log("save data function");
    await AsyncStorage.setItem(item_name, JSON.stringify(object));
  } catch (error) {
    console.log("savedata function didnt work u bitch ");
  }
};

const testGetItem = async inventory => {
  try {
    let value = await AsyncStorage.getItem(inventory); //returns object consisting of all objects
    let storage = JSON.parse(value);
    let list = Object.values(storage);
    let allKeys = list.keys();

    if (value !== null) {
      console.log(storage);
    }
  } catch (error) {
    console.log(error);
  }
};

const printAllKeys = async () => {
  AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys)
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  });
  // AsyncStorage.clear();
};
