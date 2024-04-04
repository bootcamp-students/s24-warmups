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
      console.log('i: ', i);
      integerArray.push(i)
    }
    console.log('integerArray: ', integerArray)
 return integerArray
  }

/* other code that works:
function between(a, b) {
  let answer = [a]
  let newNumber = a
  while (newNumber < b) {
    newNumber = newNumber + 1
    answer.push(newNumber)
  }
  return answer
}
*/

  /* broken code:

  function between(a, b) {
    let integerArray = [a, b]
    for (let i = a; i < b; i++) {
      
    }
  }

      let array = (a < b -1, a ++);
    return array
    for ( a, b, i +1)
    start stop step 
*/
