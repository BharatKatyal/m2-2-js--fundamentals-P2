// Exercise 2
//
// Write a function that accepts two integers and returns
// the greater integer.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {
  // your code here...
  let answer = Math.max(num1, num2)
 return answer
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//
// Call the function to test your code.
// console.log(getMax(52, 43));
// console.log(getMax(100, 2000));
// console.log(getMax(80, 5));



// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = getMax;
