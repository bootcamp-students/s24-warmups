function scramble(str1, str2) {
  let charCount = {};

  for (let char of str1) {
    //adds each unique character in str1 to an object
    if (!charCount[char]) {
      // with a key value pair to the number of times the character appears in str1
      charCount[char] = 1; // adds character to chatCount if it isn't in it already
    } else {
      charCount[char]++; // if it is, increment its value by 1
    }
  }

  for (let char of str2) {
    // compares every character in str 2 to charCount
    if (!charCount[char]) {
      // returns false if character doesn't exist or has a value of 0
      return false;
    } else {
      charCount[char]--; //decreases that character's count by 1
    }
  }

  return true; // returns true if checking character count never triggers to return false
}

// check if str1 contains all the characters in str2

/*
  Ember's Feedback:
  - Good work!
  - Reminder that you should understand what !str1counter[char] is doing and why it works. Property access returns undefined if the property doesn't exist.
    Undefined is falsey, so the boolean negation operator (!) will turn it into the boolean value true.
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
