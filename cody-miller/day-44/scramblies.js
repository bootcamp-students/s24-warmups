function scramble(str1, str2) {
  // Create a frequency count for characters in str1
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if str2 can be formed by characters in str1
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Does str1 include str2?
// Break apart str2
// See if it is in str1
// Else, return false
