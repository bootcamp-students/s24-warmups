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