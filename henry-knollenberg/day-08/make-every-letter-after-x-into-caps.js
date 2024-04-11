/* Find each instance of the letter. After each instance grab
  the index. Take index plus one. Capitalize the letter in that
  index. Loop for the length of the string.
  
  Parameters: string, letter
  Return: copy of the string with the capitalized letters.
  */

  var makeEveryLetterAfterXCaps = function (str, letter) {
    let capStr = "";  //Initializes the string to be returned
    for (let i = 0; i < str.length; i++) { //For loop to loop through each character of the string 
      capStr += str[i];  //Add each character to the new string
      if (capStr[i] === letter) { //If the current letter equals the inputed letter,
        i++;    //then skip to the next letter
        if (i >= str.length) {
          break;
        }
        capStr += str[i].toUpperCase(); //and capitalize the letter and add it to the new string 
      }
    }
    return capStr;
  }


/*Ember -- I tried to restart, approaching it a bit differently, but I came 
across the same issues. Both of these "solutions" pass the basic
tests, but fail the random tests. Looking over the random tests, I 
am almost sure that the test is faulty, but who knows (after all, your 
solution that you sent me does pass them) - I'm probably
missing something. Let me know if you can spot my issue. Thanks. My
second attempt is below.*/

  var makeEveryLetterAfterXCaps = function (str, letter) {
    let strArray = str.split("");  
    let nextCap = false;
    let capStr = "";
    
    for (const char of strArray) {
      if (nextCap === true) {
        capStr += char.toUpperCase();
        nextCap = false;
        continue;
      } else {
        capStr += char;
      }
      if (char === letter) {
        nextCap = true;
      }       
    } 
    return capStr;
  }