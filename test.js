const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2} : `, (answer) => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps) {
  const asyncLoop = setInterval(() => {
    if (i === arr.length - 1) {
      console.log("works");
    }
    askIfGreaterThan(arr[i], arr[i + 1], (bool) => {
      if (bool) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  });
}

innerBubbleSortLoop([2, 1, 3, 4, 5, 6], 0, false);
