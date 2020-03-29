import input from "./input.js";
import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

export const addItem = async (item_type, item_unit, amount, expiration_date) => {
  console.log("addItem function worked");

  let value = await AsyncStorage.getItem("inventory"); //returns object consisting of all objects
  let storage = JSON.parse(value);

  if (item_type in storage){
    let obj = storage[item_type];

    var contentItem = {
        expiration: expiration_date,
        amnt: amount 
    };

    obj.content.push(contentItem);
  }
  else{
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
  }

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
        alert("You have used " + amount + " units of " + key);
        console.log("object old amount: " + object.content[0].amnt);
        console.log("object units: " + object.unit);

        let newAmnt = object.content[0].amnt - amount;

        if(newAmnt > 0){
            object.content[0].amnt = newAmnt;   
            saveData("inventory", storage);
        }
        else if(newAmnt < 0){
            alert("That amount is too high, you will run out of " + key);
        }
        else{
            // let arr = object.content;
            // arr.splice(0, 1);
            // saveData("inventory", storage);
            object.content[0].amnt = newAmnt; 

            if(object.content.length > 1){
                console.log("entersplice");
                object.content.splice(0,1);
                console.log("splice works");
            }
            else{ //delete entire object from list
                console.log("all stock is 0");
                storage.key = undefined;
                console.log("delete whole obj");
                saveData("inventory", storage);
            }
        }
        logData(storage);
        console.log("object new amount: " + object.content[0].amnt);

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

// const deleteStock = (object, list, target) =>{

//     let arr = object.content;
//     if(arr.length > 1){
//         console.log("entersplice");
//         arr.splice(0,1);
//         console.log("splice works");
//     }
//     else{ //delete entire object from list
//         console.log("all stock is 0");
//         object.target = undefined;
//         console.log("delete whole obj");
//     }
//     logData(list);
//     // saveData("inventory", list);
// };

const logData = list => {
  for (var key in list) {
    // check if the property/key is defined in the object itself, not in parent
    if (list.hasOwnProperty(key)) {
      console.log(key, list[key]);
    } else {
      console.log("no key");
    }
  }
};

const saveData = async (item_name, object) => {
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
