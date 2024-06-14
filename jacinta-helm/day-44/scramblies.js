function scramble(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
  
    for (let char of arr2) {
        let index = arr1.indexOf(char);
        if (index === -1) {
            return false;
        }
        arr1.splice(index, 1);
    }
  
    return true;
}

/*
    Ember's Feedback:
    - Good work! Times out on Codewars but it works fine for smaller inputs
*/

// Alternative Solution
function scramble(str1, str2) {
    const charCount = {};
  
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Check if str2 can be formed using the characters in str1
    for (let char of str2) {
      // Character not available or not enough occurrences
      // if the key doesn't exist, returns undefined which is falsy
      // if the value for the letter key is zero, that is also falsy
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    return true;
  }