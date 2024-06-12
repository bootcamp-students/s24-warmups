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
    // 