function longest(s1, s2) {
    let initialString = s1 + s2;

    let stringToArray = initialString.split("");

    let filteredArray = stringToArray.filter((value, index) => stringToArray.indexOf(value) === index);
    filteredArray.sort();

    let finalString = filteredArray.join("");

    return finalString;
}
/*
    Ember's Feedback:
    - Great job!
    - indexOf gives you the first instance of the value so that is awesome check you
        came up with. That will loop over the array many time so there are technically more efficient
        solutions but efficiency is only a worry when it shows itself as a real issue.
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
