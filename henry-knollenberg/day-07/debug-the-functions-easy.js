/* Concatenate the strings and then add/multiply the values */

function multi(arr) {
    let returnValue = 1;
    for (let value of arr) {
      returnValue *= value;
      console.log(returnValue);
    }
    return returnValue;
  }
  function add(arr) {
    let returnValue = 0;
    for (let value of arr) {
      returnValue += value;
    }
    return returnValue;
  }
  function reverse(str) {
    let splitString = str.split(""); //Split the string into an array
    let reverseArr = splitString.reverse(); //reverse the array
    let joinArr = reverseArr.join(""); //join the array into a string
    return joinArr;
  }
  