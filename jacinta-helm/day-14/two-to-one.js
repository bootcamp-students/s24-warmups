function longest(s1, s2) {
  let combinedString = s1 + s2;

  let finalString = combinedString.split('').sort().reduce((acc, char) => {
    if (acc === '' || char !== acc.slice(-1)) {
      acc += char;
    }
    return acc;
  })

  return finalString;
}

//P i need to create a function that takes 2 strings and includes only letters once from a-z,
//R my function should return one string that includes letters a-z showing each letter once.
//Example a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"
//C there are no double letters in the array.
//Explain I combined the two arrays to get a new array. I split the array to get each letter by itself so it'll be easier to
// remove repeated letters. sort the string to put them in order and reduce it. use slice to check if the previous character is the same as the
//as the next one either gets rid of it or continues on to the next character
/*
  Ember's Feedback:
  - Great job!
  - I am almost positive the "acc === '' ||" part is irrelevant and can be removed.
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
