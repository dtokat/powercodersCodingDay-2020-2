// Write a function that returns the GCD (greatest common divisor) of 3 integers.

// Example:
// Input: 16, 24, 64
// Output: 8

// Estimated time: 15 minutes
// Total points: 15

function greatestCommonDivisor(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num2) {
    var temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}
function threeGCD(arr) {
  var result = [];
  result.push(greatestCommonDivisor(arr[0], arr[1]));
  result.push(greatestCommonDivisor(arr[1], arr[2]));
  result.push(greatestCommonDivisor(arr[0], arr[2]));
  result.sort(function (a, b) {
    //I need this function to sort numericaly correct!!
    return a - b;
  });
  return result[0];
}
console.log(threeGCD([16, 24, 64]));
