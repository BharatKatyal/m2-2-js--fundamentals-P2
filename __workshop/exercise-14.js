// Exercise 13
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  // str and char are both strings
  let count = str.split(char).length -1;
  // let count = (str.match(char) || []).length;
  return count
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));
console.log(countChar("the amazing spiderman", "a"));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countChar;
