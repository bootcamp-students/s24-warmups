//use strict
//if there is two si and s2
//we need to split and sort s1 s2 into two separate arrays
//join arrays with concat
//split new array then sort
//concat into a new string and then remove duplicates
//

function longest(s1, s2) {
  let newStr = s1.concat(s2)
  let newArr = newStr.split("")
  newArr.sort()
  let filterArr = newArr.filter(function (item, pos) {
    return newArr.indexOf(item) == pos;
  })
  let filterStr = filterArr.join("")
  return filterStr
}
/*
  Ember's Feedback:
  - Great job :D
  - Great job with the filter! indexOf returns the index of the first
    occurrence so that is how you can remove duplicates after the first instance.
    indexOf does loop over the starting array so it isn't necessarily the most efficient solution,
    but it is a good solution and you don't usually need to worry about efficiency until it becomes a problem
*/
// Alternative Solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

function longest(s1, s2) {
  let newStr = s1.concat(s2);
  let newArr = newStr.split("");
  let resultArr = [];
  const addUniqueValuesToArray = (accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue)
    }
    return accumulator
  }
  newArr.reduce(addUniqueValuesToArray, resultArr)
  let resultStr = resultArr.sort().join("");
  return resultStr;
}
