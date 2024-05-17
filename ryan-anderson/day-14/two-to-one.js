'use strict'
function longest(s1, s2) {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newString = '';
  for (let i = 0; i < letters.length; i++) {
    if (s1.includes(letters[i]) === true || s2.includes(letters[i]) === true) {
      newString += letters[i];
    }
  }
  return newString
}

// array containing all letters as strings
// for loop iterating over each letter
// if either string includes letter, add it to output string

/*
  Ember's Feedback:
  - Interesting approach!
  - Good job
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
