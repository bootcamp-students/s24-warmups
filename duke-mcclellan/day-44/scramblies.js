//Parameters - string
//Return - boolean
//Example - scramble('rkqodlw', 'world') ==> True
//scramble('katas', 'steak') ==> False
//Concern - wrong method
//Explain - I want to create a function that can iterate over a string
//and determine if the letters in the first string can be rearranged to match
//the second string

function scramble(str1, str2) {
 
    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if str2 can be formed using the characters in str1
    for (let char of str2) {
        if (!charCount[char]) {
            return false; // Character not available or not enough occurrences
        }
        charCount[char]--;
    }

    return true;
  }