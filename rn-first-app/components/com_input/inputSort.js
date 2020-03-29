export function testSort() {
  let test = [
    {
      expiration: "3/10/2020",
      quantity: "20"
    },
    {
      expiration: "3/14/2020",
      quantity: "10"
    },
    {
      expiration: "3/17/2020",
      quantity: "30"
    },
    {
      expiration: "3/12/2020",
      quantity: "15"
    },
    {
      expiration: "3/20/2020",
      quantity: "20"
    }
  ];

  console.log("\nTesting input sort function...");
  console.log(test);
  let result = sortContent(test);
  console.log("result");
  console.log(result);
}

export default function sortContent(content) {
  let newData = [];
  for (values in content) {
    newData.push(content[values]);
  }
  for (let i = 0; i < newData.length; i++) {
    let min = i;
    for (let j = i + 1; j < newData.length; j++) {
      let minDate = new Date(newData[min].expiration);
      let currDate = new Date(newData[j].expiration);
      if (currDate < minDate) {
        min = j;
      }
    }
    if (min != i) {
      let temp = newData[i];
      newData[i] = newData[min];
      newData[min] = temp;
    }
  }

  return newData;
}
