import React, { Component } from "react";
import { AsyncStorage } from "react-native";

//function used to load values into storage for testing
function loadTest() {
  let test = {
    tomato: {
      unit: "whole tomatoes",
      content: [
        {
          expiration: "3/29/2020",
          quantity: "30"
        },
        {
          expiration: "4/20/2020",
          quantity: "15"
        },
        {
          expiration: "4/13/2020",
          quantity: "4"
        }
      ]
    },
    cereal: {
      unit: "apples",
      content: [
        {
          expiration: "8/07/2025",
          quantity: "124"
        },
        {
          expiration: "12/14/2027",
          quantity: "54"
        },
        {
          expiration: "1/23/2023",
          quantity: "12"
        }
      ]
    }
  };

  store = async () => {
    try {
      await AsyncStorage.setItem("inventory", JSON.stringify(test));
    } catch (error) {}
  };
  store();
  console.log("Test values loaded");
}

//for storage json format
export function findTotalx(type) {
  let sum = 0;
  if (type.content != undefined && Object.values(type.content) != undefined) {
    let contentDiv = Object.values(type.content);
    for (let i = 0; i < contentDiv.length; i++) {
      sum += contentDiv[i].expiration;
    }
  }
  return sum;
}

//for section list data format
export function findTotaly(root) {
  console.log("Beginnning to sum up values");
  let sum = 0;
  if (root.data != undefined) {
    let info = root.data;
    console.log("info");
    console.log(info);
    for (i = 0; i < info.length; i++) {
      sum += parseInt(info[i].quantity);
    }
  }
  return sum;
}

//for section list data format
export function findTotalr(root) {
  console.log("Beginnning to sum up values");
  let sum = 0;
  if (root.length >= 0) {
    console.log("info");
    console.log(root);
    for (i = 0; i < root.length; i++) {
      sum += parseInt(root[i].quantity);
    }
  }
  return sum;
}

//takes all the values from storage and stores it into a sectionlist friendly data structure
export function storeAll() {
  loadTest();

  console.log("Pulling storage into list");
  finish = async () => {
    var rationData = [];
    store = async () => {
      try {
        console.log("Asynchronously accessing storage");
        let value = await AsyncStorage.getItem("inventory");
        let storage = JSON.parse(value);
        let i = 0;
        for (i = 0; i < Object.values(storage).length; i++) {
          console.log("Loading " + Object.keys(storage)[i]);
          let item = Object.values(storage)[i];
          let number = 0;
          let data = [];
          for (number = 0; number < item.content.length; number++) {
            let contentDiv = item.content[number];
            let expirationData = contentDiv.expiration;
            let quantityData = contentDiv.quantity;
            let unitData = item.unit;
            let slot = {
              expiration: expirationData,
              quantity: quantityData,
              unit: unitData
            };
            data.push(slot);
          }

          //console.log(findTotaly(data));
          let slot2 = {
            data: data,
            title: Object.keys(storage)[i]
          };
          //console.log("sum is");
          //console.log(findTotaly(slot2));
          rationData.push(slot2);
        }
      } catch (error) {
        console.log(error);
      }
    };
    await store();
    console.log("Data loaded for export");
    //console.log(data);
    return rationData;
  };
  let done = finish();
  return done;
}
