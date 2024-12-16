function scramble(str1, str2) {
  let str1counter = {};

  for (let char of str1) {
    if (!str1counter[char]) {
      str1counter[char] = 1;
    } else {
      str1counter[char]++;
    }
  }

  for (let char of str2) {
    if (!str1counter[char]) {
      return false;
    } else {
      str1counter[char]--;
    }
  }
  return true;
}

//   let counter = 0;

//   for (let letter of str2) {
//     let i = str1.indexOf(letter);
//     if (i != -1) {
//       str1 = str1.replace(letter, '');
//       counter++;
//     }
//   }

//   if (str2.length === counter) {
//     return true;
//   } else {
//     return false;
//   }
// }
// A scrambled string

// a boolean

// 'cedewaraaossoqqyt', 'codewars'   ), true

// I could have a logic or type error

// for each letter in the ordered string loop through the unordered one to see
// if it exists in that one. If it does, slice that index out of the array and loop through it again
// repeat until you finish the outer loop. return true if we found a letter for each false if not

// I can do this!

/*
  Ember's Feedback:
  - Good work!
  - I tried to complete this without using an object. It is possible but it was timing out on Codewars.
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
