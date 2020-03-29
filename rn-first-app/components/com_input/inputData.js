import input from "./input.js";
import {newItem} from "./input.js";
import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

var items_list = {

  itemname: {
    unit: "unit type",
    content: [
      
      {
        expiration: "date",
        amount: "number"
      }

    ]
  }
};

addItem = (item_type, item_unit, amount, expiration_date) => {

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
  saveData("items list", items_list);
  
};
export {addItem};

useAmount = (item_type, amountUsed) => {

  var newAmount = item_type.content[i].amount - amountUsed;

  items_list[item_type].content[i].amount = newAmount;
  
  saveData("items list", items_list);
  
};
export {useAmount};

saveData = async (item_name, object) => {
  try{
    await AsyncStorage.setItem(item_name, object);
  } catch (error) {
      console.log("it didnt work u bitch ");
  }
};