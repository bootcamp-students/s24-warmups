function duplicateCount(text) {
  let repeatCount = 0;
  let uniqueChars = [];
  for (let i = 0; i < text.length; i++) {
    if (text.lastIndexOf(text[i]) !== text.indexOf(text[i].toLowerCase()) && !uniqueChars.includes(text[i].toLowerCase())) {
      repeatCount += 1;
      uniqueChars += text[i].toLowerCase();
    }
  }
  return repeatCount
}

//use lastIndexOf() to check if character appears multiple times
//first time each character is seen, add it to uniqueChars so that it is only counted once

/*
  Ember's Feedback:
  - Great job!
  - Good use of indexOf and lastIndexOf! :D
*/
// Alternative Solution
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    })
    .length;
}
