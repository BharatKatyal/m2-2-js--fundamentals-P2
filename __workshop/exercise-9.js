// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greetLong(["bob", "daniel"]) returns ["Hello daniel"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greetLong(list) {
  const shorterList = list.filter(word => word.length >4 )
  shorterList.forEach((element){
    return "Hello " + element
  })
  // shorterList.forEach(element => console.log(`Hello `+ element))

  // list is an array of strings
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));
console.log(greetLong(["Jim", "Same", "Erick", "Hi", "Coolo"]))

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = greetLong;
