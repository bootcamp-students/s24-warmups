// Ember, I had issues copy and pasting this, i tried to spruce it up before submitting, let me know if it doesn't translate well. have a good one.
function longest(s1, s2) {
  "use strict";

  let concatString = (s1 + s2)

  let lettersArray = concatString.split("")

  lettersArray.sort()

  function removeDupes(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  let resultsArray = removeDupes(lettersArray)
  return resultsArray.join('')
}

/*
i have 2 strings given to me and need to return a sorted string with only 1 of each letter.
strings are immutable so i should combine them into an array, use the array.sort method
and join the array back into a string and return it.
ive joined strings, split into an array by letter and sorted into order.
now i need go go over each index once. if the letter isn't in a new array, add the letter.
join the results together and success.
*/
/*
  Ember's Feedback:
  - Look good! no worries here, looks normal.
  - great job on that filter method, very good :D
  - the remove dupes function is kind of unneeded, you just call that filter directly on letters Array instead
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
