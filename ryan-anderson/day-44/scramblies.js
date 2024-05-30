function scramble(str1, str2) {
  
    let charCount = {}
    
    for (let char of str1) { //adds each unique character in str1 to an object
      if (!charCount[char]) { // with a key value pair to the number of times the character appears in str1
        charCount[char] = 1   // adds character to chatCount if it isn't in it already
      } else {
        charCount[char]++   // if it is, increment its value by 1
      }
    }
    
    for (let char of str2) {  // compares every character in str 2 to charCount
      if (!charCount[char]) { // returns false if character doesn't exist or has a value of 0
        return false
      } else {
        charCount[char]-- //decreases that character's count by 1
      }
    }
    
    return true // returns true if checking character count never triggers to return false
  }
  
  // check if str1 contains all the characters in str2