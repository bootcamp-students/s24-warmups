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
// if it exhists in that one. If it does, slice that index out of the array and loop through it again
// repeat until you finish the outer loop. return true if we found a letter for each false if not

// I can do this!
