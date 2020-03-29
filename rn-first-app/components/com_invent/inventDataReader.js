// import { Text, AsyncStorage } from "react-native";
// import React, { Component } from "react";

// /*
// class InventPage extends Component {
//   render() {
//     return <Text>findTotalAmount(target)</Text>;
//   }
// }
// */

// /*
// //reads the JSON file and returns it in object form
// function readJSON() {
//   console.log("Reading data.json");
//   let raw = fs.readFileSync(__dirname + "/../../data.json");
//   return JSON.parse(raw);
// }
// */

// function loadTest() {
//   let test = {
//     tomato: {
//       unit: "whole tomatoes",
//       content: [
//         {
//           expiration: "3/29/2020",
//           quantity: "30"
//         },
//         {
//           expiration: "4/20/2020",
//           quantity: "15"
//         },
//         {
//           expiration: "4/13/2020",
//           quantity: "4"
//         }
//       ]
//     }
//   };

//   store = async () => {
//     try {
//       await AsyncStorage.setItem("inventory", JSON.stringify(test));
//     } catch (error) {}
//   };
//   store();
//   console.log("Test values loaded");
// }

// //Searches the storage object and object data of the target if it exists
// function searchStorage(target) {
//   console.log("Searching data for " + target);
//   target = target.toLowerCase().trim();

//   access = async () => {
//     try {
//       console.log("Asynchronously accessing storage");
//       let value = await AsyncStorage.getItem("inventory");
//       let storage = JSON.parse(value);

//       console.log(storage);
//       console.log(Object.keys(storage));
//       console.log(Object.values(storage));

//       let item = storage[target];
//       if (item != undefined) {
//         console.log("Found");
//         console.log(item);
//         return item;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     //when no matching key is found, defaults to undefined
//     console.log("Item " + target + " not found");
//     return undefined;
//   };

//   return access();
// }

// export async function findTotalAmount(target) {
//   console.log("\nBeginning to find total quantity amount of " + target);
//   let item = await searchStorage(target);
//   //error checking, if the item actually exists in storage
//   if (item != undefined && item != null) {
//     let sum = 0;
//     //check if there's actual values stored
//     if (item.content != undefined) {
//       //loop through all values for typical sum finding
//       for (i = 0; i < item.content.length; i++) {
//         let expireDate = item.content[i].expiration;
//         let amount = item.content[i].quantity;
//         console.log(i + " | " + amount);
//         sum += parseInt(amount);
//       }
//       console.log("Total amount of target " + target + " is " + sum);
//       console.log(sum);
//       return sum;
//     } else {
//       console.log("Expiration values undefined");
//     }
//   }
//   //default to 0 when it doesn't exist
//   console.log("No amounts of " + target + " exist");
//   return 0;
// }

// export function storeAll() {
//   loadTest();

//   console.log("Pulling storage into list");
//   finish = async () => {
//     var rationData = [];
//     store = async () => {
//       try {
//         console.log("Asynchronously accessing storage");

//         let value = await AsyncStorage.getItem("inventory");
//         let storage = JSON.parse(value);

//         for (let i = 0; i < Object.values(storage).length; i++) {
//           console.log("Loading " + Object.keys(storage)[i]);
//           let item = Object.values(storage)[i];
//           let number = 0;
//           let data = [];
//           for (number = 0; number < item.content.length; number++) {
//             let contentDiv = item.content[number];
//             let expirationData = contentDiv.expiration;
//             let quantityData = contentDiv.quantity;
//             let unitData = item.unit;
//             let slot = {
//               expiration: expirationData,
//               quantity: quantityData,
//               unit: unitData
//             };
//             data.push(slot);
//           }
//           let slot2 = {
//             data: data,
//             title: Object.keys(storage)[i]
//           };
//           rationData.push(slot2);
//           /*data.push({
//             data: Object.values(storage)[i],
//             title: Object.keys(storage)[i]
//           });*/
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     await store();
//     console.log("Data loaded for export");
//     //console.log(data);
//     return rationData;
//   };
//   let done = finish();
//   return done;
// }

// //console.log(findTotalAmount("tomato"));

// //export default InventPage;
