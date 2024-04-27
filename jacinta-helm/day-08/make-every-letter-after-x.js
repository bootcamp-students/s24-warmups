var makeEveryLetterAfterXCaps = function (str, letter) {
  let letterArray = str.split('');
  for (let i = 0; i < letterArray.length -1; i++) {
    if (letter === letterArray[i]) {
      letterArray[i + 1] = letterArray[i + 1].toUpperCase();
    }
   }
   return letterArray.join('');
};

// P create a function that will make the letter after 'x' capital and if it
// is already Cap then it should stay Cap.
// R return the function that will capitalize a letter out of a string
// E ('bac', 'a'), 'baC'
// I can use the toUpperCase() method with split and join.

// I really struggled on this one. can we go over this please. i tried two different methods.

/*
  Ember's Feedback:
  - Great job!
  - We for sure can go over this, if we have time monday or on Tuesday.
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
