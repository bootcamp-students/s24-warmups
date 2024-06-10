// parameters- check if str1 has the characters to spell out the word in str2
// return- if the str1 has the characters to spell out word in str2 return true, otherwise
// return false
// example- scramble('rkqodlw', 'world') ==> True

function scramble(str1, str2) {
    let charCount = {}; // to store count of each character
    
    for (let char of str1){ // loop
      if (charCount[char]){ // if the character already exists in charCount
        charCount[char]++; // increas the character count by 1
      } else {
        charCount[char] = 1; // if the character doesnt exist make its count 1
      }
    }
    for (let char of str2){ // loop str2
      if (charCount[char]){ // if the character already exists and is greater than 0
        charCount[char]--; // decrease the count of the character
      } else {
        return false; // if the count is less than 0 then return false
      }
    }
    return true; // if all characters in str2 have a match return true.
    
  }