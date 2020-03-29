import input from "./input.js";
import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

var items_list = {

    //  itemname: {
    //     unit: "unit type",
    //     content: [
      
    //         {
    //             expiration: "date",
    //             amount: "number"
    //         }

    //     ]
    // }
};

export const addItem = (item_type, item_unit, amount, expiration_date) => {

    console.log("addItem function worked");
    var newItem = {
        unit: item_unit, //units: eggs
        content: [
            {
                expiration: expiration_date,
                amnt: amount //amount: 20
            }
        ]   
    };

    items_list[item_type] = newItem;

    console.log("before save data");
    saveData("inventory", items_list);
    // testData();
     testDataAgain("inventory");
};


export const useAmount = (item_type, amountUsed) => {

    var newAmount = item_type.content[i].amount - amountUsed;
  
    items_list[item_type].content[i].amount = newAmount;
    
    saveData("items list", items_list);
    
  };
  

const logData = (list) => {
    for (var key in list) {
      // check if the property/key is defined in the object itself, not in parent
      if (list.hasOwnProperty(key)) {           
          console.log(key, list[key]);
          console.log("Log Data function");
      }
      else{
          console.log("no key");
      }
    }
};

 const saveData = async (item_name, object) => {
    console.log("big brain");
    try{
        console.log("save data function");
        await AsyncStorage.setItem(item_name, JSON.stringify(object));
    } catch (error) {
        console.log("savedata function didnt work u bitch ");
    }
};

const testDataAgain = async (item_name) => {

    try {
        const value = await AsyncStorage.getItem(item_name);
        if (value !== null) {
            // We have data!!
            console.log(JSON.parse(value));
        }
    } catch (error) {
        // Error retrieving data
    }

};

const testData = async () =>{
    AsyncStorage.getAllKeys().then((keys) => {
      return AsyncStorage.multiGet(keys)
        .then((result) => {
          console.log(result);
        }).catch((e) =>{
          console.log(e);
        });
    });
    // AsyncStorage.clear();
  };
