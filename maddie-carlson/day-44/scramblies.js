function scramble(str1, str2) {
  //function checks if a portion of the letters composing string 1 can be re-arranged to compose string 2
  //returns a boolean if they have the same characters, false otherwise
  
  //to solve, loop over both strings, creating objects containing the count of each character in the strings
  let str1Chars = {}
  let str2Chars = {}
  
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i]
    
    if (Object.hasOwn(str1Chars, char)) { //duplicate character
      str1Chars[char] += 1
    } else { //new character
      str1Chars[char] = 1
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    
    if (Object.hasOwn(str2Chars, char)) { //duplicate character
      str2Chars[char] += 1
    } else { //new character
      str2Chars[char] = 1
    }
  }
  
  //afterwards, compare the objects and make sure the character count of string 1 exceeds all counts for string 2
  let keys = Object.keys(str2Chars)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    if (!str1Chars[key]) { //key isn't in string 1, immediately return false
      return false
    } else if (str2Chars[key] > str1Chars[key]) { //insufficient characters
      return false
    }
  }
  
  //otherwise, complete the loop and return true
  return true
}
