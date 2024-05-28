//parameters -
//return - last four with ####
//example - "4556364607935616" --> "############5616"
//concern - wrong syntax
//explain - I want to iterate over the string and sub out the last for numbers
//with a #
  function maskify(str) {
  // If the string length is less than or equal to 4, return the original string
  if (str.length <= 4) {
    return str;
  }

  // Extract the last four characters
  let lastFour = str.substr(-4);

  // Replace all characters except the last four with '#'
  let masked = '#'.repeat(str.length - 4) + lastFour;

  return masked;
}
/*
  Ember's Feedback:
  - Great job! :D
  - Good use of repeat
*/

// Alternative Solution

// Taken from Codewars solution page: credit to computerguy103, moorsiek, vvidala, MaxStalker, Oksana, ndugger, msmorgan, talymo, shuriu, thesadabc (+ 251)
function maskify(cc) {
  // ReGex: get any character that is immediately followed by four more characters.
  // i.e. match everything but the last 4 characters
  return cc.replace(/.(?=.{4})/g, "#");
}

// Taken from Codewars solution page: credit to andorey
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}

function maskify(cc) {
  // guard statement to check for undefined input
  let inputString = cc ?? '';
  // guard statement to convert number into string or throw an error
  if (typeof cc !== 'string' && (typeof cc !== 'number' || Number.isNaN(cc))) {
    throw new Error('Parameter is not a string or number!');
  }
  // if my input is less than 4 characters long I will return the input
  if (inputString.length <= 4) {
    return inputString
  }
  // make a new string filled with the length - 4 number of pound characters (#)
  let returnString = '#'.repeat(inputString.length - 4)
  // add the last 4 characters from my input and return the result
  return returnString + inputString.slice(-4)
}
/*
  PRECEPT
  Params - string
  Return - string
  Example - "64607935616" -->      "#######5616"
             "1" -->                "1"
              "" -->                 ""
  Concerns -
      strings are immutable in JavaScript
      undefined input -> I choose to return an empty string
      input of incorrect type -> If number I will convert to a string, otherwise I will throw an error
      empty string -> example states return empty string
      input <= 4 character -> example states return unaltered string
  Explain -
      If my input is less than 4 characters long I will return the input.
      I will determine how long my input is and make a new string filled with the length - 4 number of -
      pound characters (#). I will then add the last 4 characters from my input and return the result.
  Positive Self Talk - I have done string manipulation many times before
  Translate - I will move my logic block into line comments and implement them in JS.
*/
