function getSum(a, b) {

  let smallNum = a < b ? a : b

  let bigNum = a > b ? a : b

  let answer = 0

  for (let i = smallNum; i <= bigNum; i = i++) {
    answer = answer + i
  }

  return answer
}

/* Ember's Feedback:
  Good job!
  i++ is already shorthand for i = i + 1, so the i = was unnecessary
  Good use of ternary this early.
*/

// Alternative solution
function getSum(a, b) {

  let [smallNum, bigNum] = a < b ? [a, b] : [b, a]

  let answer = 0;

  for (let i = smallNum; i <= bigNum; i++) {
    answer += i
  }

  return answer
}
