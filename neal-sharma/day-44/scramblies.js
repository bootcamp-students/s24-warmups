// parameters- check if str1 has the characters to spell out the word in str2
// return- if the str1 has the characters to spell out word in str2 return true, otherwise
// return false
// example- scramble('rkqodlw', 'world') ==> True

function scramble(str1, str2) {
  let charCount = {}; // to store count of each character

  for (let char of str1) {
    // loop
    if (charCount[char]) {
      // if the character already exists in charCount
      charCount[char]++; // increase the character count by 1
    } else {
      charCount[char] = 1; // if the character doesn't exist make its count 1
    }
  }
  for (let char of str2) {
    // loop str2
    if (charCount[char]) {
      // if the character already exists and is greater than 0
      charCount[char]--; // decrease the count of the character
    } else {
      return false; // if the count is less than 0 then return false
    }
  }
  return true; // if all characters in str2 have a match return true.
}

/*
  Ember's Feedback:
  - Good work!
  - Reminder that you should understand what if (charCount[char]) is doing and why it works. Property access returns undefined if the property doesn't exist.
    Undefined is falsey, so the condition portion of the if statement coerces it to be a boolean value
    Also, for the 2nd loop, zero is falsey. Which means, there are more instances of the letter in string 2 than you saw in string 1.
*/
// Alternative Solution
function scramble(str1, str2) {
  let count = {};

  Array.prototype.forEach.call(str1, function (a) {
    count[a] = (count[a] || 0) + 1;
  });

  return Array.prototype.every.call(str2, function (a) {
    // because the decrement operator is placed in the back, it returns the current value to be used in the return
    // BEFORE it decrements the value. This is necessary because zero is falsey and .every() coerces the returned value to be a boolean, for the sake of testing.
    return count[a]--;
  });
}
