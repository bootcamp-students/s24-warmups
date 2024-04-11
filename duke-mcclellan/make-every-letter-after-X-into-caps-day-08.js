//return should be uppercase letters after x

    const makeEveryLetterAfterXCaps = function (str, letter) {
    let result = "";
    let capitalizeNext = false;
      
    for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    
    if (capitalizeNext) {
      currentChar = currentChar.toUpperCase();
    }
      capitalizeNext = currentChar === letter;
      result += currentChar;
    }
      
      return result;
    };








