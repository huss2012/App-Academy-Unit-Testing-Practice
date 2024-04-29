function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error("The passed arg is not a number")
  } else if (number % 2 !== 0) {
    return true;
  }
  return false;
}

function myRange(min, max, step = 1) {
  // Your code here
  let resArray = [];
  if (step === undefined) {
    for (let i = min; i <= max; i += step){
      resArray.push(i)
    }
  } else {
    for (let i = min; i <= max; i += step){
      resArray.push(i);
    }
  }
  return resArray;
}


module.exports = { isFive, isOdd, myRange };
