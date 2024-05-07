function longest(s1, s2) {
  let combinedSortedString = (s1 + s2).split('').sort();
  return combinedSortedString.reduce((a, c) => {
    return a.includes(c) ? a : a + c;
  }, '');
}

// Two distinct strings, no spaces, all lowercase

// return the same type of string containing each letter in the alphabet
// included between both strings in alphabetical order

// "aretheyhere", "yestheyarehere"), "aehrsty"

// I could not filter out duplicates, I could not have it sorted in alphabetical order

// combine both strings, sort them in alphabetical order, loop over the string
// putting the previous letter in a variable, compare the current to the previous.
// If they are the same don't add it to the result string if they aren't then add it

// I can do this!

/*
  Ember's Feedback:
  - Excellent!! I didn't even think about using reduce like that, that is super good
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
