const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  function askIfGreaterThan(el1, el2, callback) {
    rl.question(`Is ${el1} greater than ${el2} : `, (answer) => {
      if (answer === "yes") {
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) {
      outerBubbleSortLoop(madeAnySwaps);
    }

    for (let i = 0; i < arr.length - 1; i++) {
      askIfGreaterThan(arr[i], arr[i + 1], (bool) => {
        if (bool) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          madeAnySwaps = true;
        }
      });
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    }
  }
}
