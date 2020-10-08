// Write a function called getFirstValue. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

// Example:
// Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]
// Output: Wednesday

// Estimated time: 15 minutes
// Total points: 15
var days = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];
function getFirstValue(arr) {
  return arr.sort().pop();
}
console.log(getFirstValue(days));
