/* P - cc(string), four, i, array
    R - masked CC (string)

    four = slice cc(-4)
    lewt i == cc.length -4
    let array =[]
    for loop --> push "#" to array i times
    push four to array
    return joined array
    */

function maskify(cc) {
  let four = cc.slice(-4);
  let i = cc.length - 4;
  let array = [];
  for (i; i > 0; i--) {
    array.push("#")
  }
  array.push(four)
  return array.join("");
}

/*
  Ember's Feedback:
  - Good work! :D
  - I would personally put the let i = cc.length - 4 into your for loop,
    I think it is easier to read that way for sure.
  - Refactor below
*/
// Refactor
function maskify(cc) {
  let four = cc.slice(-4);
  for (let i = cc.length - 4; i > 0; i--) {
    array.unshift("#"); // unshift adds an element to the front of an array, "in place"
  }
  return four.join("");
}

// Alternative Solutions
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
