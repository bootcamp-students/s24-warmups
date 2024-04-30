/*
P - s1, s2, sortedCombo, arr1, arr2, indArr, sortedArr
R- sortedCombo

  Split s1 and s2 into arrays
  Iterate through arr2 and push each letter onto arr
  Iterate through arr, filter if not included in indArr, push to indArr
  sortedArr = indArray sorted
  sortedCombo = sortedArr joined into a string
  return sortedCombo
*/


function longest(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  arr2.forEach((letter) => arr1.push(letter));

  let indArr = []
  arr1.forEach((letter) => {
    if (!indArr.includes(letter)) {
      indArr.push(letter);
    }
  });

  let sortedArr = indArr.sort();
  let sortedCombo = sortedArr.join("");
  return sortedCombo;
}
/*
  Ember's Feedback:
  - Great job!
  - If you want, you can just concatenate the two strings then turn
    the combined string into an array with .split
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
