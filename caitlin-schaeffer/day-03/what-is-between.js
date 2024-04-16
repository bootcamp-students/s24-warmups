/* DESCRIPTION:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
Param: return an array of all integers between a & b, including them.
Return: an array of integers
*/
/* The between function generates random whole numbers between two specified limits
*/

function between(a, b) {
  let integerArray = []
  for (let i = a; i <= b; i++) {
    integerArray.push(i)
  }
  return integerArray
}

/* Ember's Feedback:
  Great job!
  When we get to Python, this will something built in called a "range"
*/
