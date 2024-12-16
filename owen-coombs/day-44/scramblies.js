function scramble(str1, str2) {
  let checkStr = {}
    
  for (let char of str1){
    if (checkStr[char]){
      checkStr[char]++;
    } else {
      checkStr[char] = 1;
    }
  } 
  
  // check for string 2 
  for (let char of str2){
    if (checkStr[char]){
      checkStr[char]--;
    }else {
      return false
    }
  }

  return true;
}
  
  
  
// will loop through an object and increase count for each one char[char] if less then 1  for string 1
// return will either be a true or false 
// will do the same as string 1 but will decrease if greater then 0

/*
  Ember's Feedback:
  - Great job!!
  - Make sure you understand why lines 5 and 14 work. If you attempt to access a property that -
    does not exist, JS will return the value 'undefined' which is falsey.
    Falsey means that the if statement is expecting a Boolean so if you don't give it one, it will coerce what you gave it into being a Boolean.
    'Undefined' when cooerced becomes 'false'
*/