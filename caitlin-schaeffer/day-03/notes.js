
// other code that works:
function between(a, b) {
    let answer = [a]
    let newNumber = a
    while (newNumber < b) {
        newNumber = newNumber + 1
        answer.push(newNumber)
    }
    return answer
}

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
