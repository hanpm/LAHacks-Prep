import input from "./input.js";
import {newItem} from "./input.js";
import { Text, AsyncStorage } from "react-native";
import React, { Component } from "react";

let testArr = {

  "tomato": {
    unit: "whole tomatoes",

    expiration: {
      "date1": "30",
      "Date2": "21"
    }

  }
};


saveItem = async (item_name, object) => {
  try{
    await AsyncStorage.setItem(item_name, object);
  } catch (error) {
      console.log("it didnt work u bitch ");
  }
};
