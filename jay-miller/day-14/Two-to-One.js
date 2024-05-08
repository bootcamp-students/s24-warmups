function longest(s1, s2) {
  "use strict"
  //2 strings
  //return a new sorted string
  //Return 1 long string showing each letter once
  //Create Arrays a and b containing unique values by making
  //them Set and converting them back to array.
  let a = [... new Set(s1.split(""))];
  let b = [... new Set(s2.split(""))];

  //combine both arrays into one
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }

  //create a new array from new combination
  //create a unique array from the combination
  let isCombo = [... new Set(a)];
  //sort array and join to form a string
  let combo = isCombo.sort().join("");
  //Return the final result
  return combo;
}
/*
  Ember's Feedback:
  - Good job!
  - You left off a curly brace at the end
  - You are dong more operations than you need to.
    You can concat the strings and then make a Set from the combined values.
  - File name needs to be all lower case
*/
// Alternative Solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
