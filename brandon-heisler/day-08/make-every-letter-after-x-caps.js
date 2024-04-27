var makeEveryLetterAfterXCaps = function (str, letter) {
  let letterArray = str.split('');

  for (let i = 0; i < letterArray.length-1; i++){
    if (letter === letterArray[i]){
      letterArray[i+1] = letterArray[i+1].toUpperCase();
    }
  }
  return letterArray.join('');
}


/*
i want to make the provided string into an array,
i want to compare each index of the array to the provided letter, if theres a match then
we modify the array, after modification, make the array a string and return it.
*/

/*
  Ember's Feedback:
  - Good job!
*/
// Alternative solution
var makeEveryLetterAfterXCaps = function (str, letter) {
  let modifiedString = "";
  let capitalizeNext = false;
  for (let i = 0; i < str.length; i++) {
    let sub = str.at(i);
    if (capitalizeNext) {
      sub = sub.toUpperCase()
    }
    capitalizeNext = sub === letter
    modifiedString = modifiedString + sub
  }
  return modifiedString;
}
