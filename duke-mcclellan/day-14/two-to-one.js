//parameter - string
//return value - return a new sorted string
//example - We need to return a new string with distinct letters taken only once
//concern - syntax error or incorrect method to solve
//explain - I'm going to create a function that analyzes both strings
//and creates a new string with each letter being taken only once(.split then .join?)
//positive talk
//translate

function longest(s1, s2) {
  const oldStrings = (s1 + s2).split('');
  const newString = oldStrings.filter((value, index) => oldStrings.indexOf(value) === index);
  newString.sort();
  return newString.join('')
}
/*
  Ember's Feedback:
  - Great job! :D
  - Really awesome solution!
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
    if(!accumulator.includes(currentValue)){
      accumulator.push(currentValue)
    }
    return accumulator
  }
  newArr.reduce(addUniqueValuesToArray, resultArr)
  let resultStr = resultArr.sort().join("");
  return resultStr;
}
