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


/*
  Ember's Feedback:
  - Good job!
  - Add some proper pseudo code
  - put old code into a notes file
  - Really great job getting to a solution!
*/
// Alternative solution
makeEveryLetterAfterXCaps = function (str, letter) {
  let modifiedString = "";
  let capitalizeNext = false;
  for (let i = 0; i < str.length; i++) {
    let sub = str.at(i);
    if (capitalizeNext) {
      sub = sub.toUpperCase()
    }
    capitalizeNext = sub === letter
    modifiedString = modifiedString + sub
  }
  return modifiedString;
}

/* Previous Code that almost solved the answer */
// const makeEveryLetterAfterXCaps = function (str, letter) {
// // test word :parameter  paRaMeter or paramTeR
//     let result = ""; //Strings are immutable, so a new string is necessary?
//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//         if (str.charAt(i) === letter && i < str.length - 1) {
//             result += str.charAt(i + 1).toUpperCase();
//             i++;
//         }
//     }
//     return result;
// }
/*
I have to use toUpperCase
I have to identify a letter
I have to target the letter after the identified letter

letter.toUpperCase(CharAt(string[letter]+1))
*/
