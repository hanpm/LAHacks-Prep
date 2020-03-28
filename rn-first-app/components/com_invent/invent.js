//import invent_style from "./invent_style.js";
const fs = require("fs");

/*
class InventPage extends Component {
    render() {
        return (
            <Text></Text>
        )
    }
}
*/

//reads the JSON file and returns it in object form
function readJSON() {
  console.log("Reading data.json");
  let raw = fs.readFileSync(__dirname + "/../../data.json");
  return JSON.parse(raw);
}

//Searches the data.JSON file and object data of the target if it exists
function searchJSON(target) {
  let json = readJSON();
  console.log("Searching data for " + target);
  target = target.toLowerCase().trim();

  //loops through all keys to determine a match
  for (i = 0; i < Object.keys(json).length; i++) {
    if (Object.keys(json)[i] == target) {
      console.log("Found " + Object.keys(json)[i]);
      return Object.values(json)[i];
    }
  }
  //when no matching key is found, defaults to undefined
  console.log("Item " + target + " not found");
  return undefined;
}

function findTotalAmount(target) {
  console.log("\nBeginning to find total quantity amount of " + target);
  let item = searchJSON(target);
  //error checking, if the item actually exists in JSON
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
          delete expireDate;
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

console.log(findTotalAmount("tomato"));

//export default InventPage;
