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

function readJSON() {
  console.log("Reading data.json");
  let raw = fs.readFileSync(__dirname + "/../../data.json");
  return JSON.parse(raw);
}

function searchJSON(target) {
  let JSON = readJSON();
  console.log(JSON);
  console.log("Searching data for " + target);
  target = target.toLowerCase();
  console.log("Found " + JSON[target]);
  return JSON[target];
}

function findTotalAmount(target) {
  let item = searchJSON(target);
  console.log("Found " + item);
  let sum = 0;
  let expiration = "expiration";
  if (item[expiration].values != undefined) {
    for (i = 0; i < item[expiration].values.length; i++) {
      if (Date.parse(item.keys[i]) >= Date.now()) {
        console.log("Removed " + item[expiration].keys[i]);
        delete item[expiration].keys[i];
      } else {
        sum += item[expiration].values[i];
      }
    }
    return sum;
  }
  return 0;
}

console.log(findTotalAmount("tomato"));

//export default InventPage;
