function maskify(cc) {
  //function takes a string
  //returns another string with all characters save the last four turned into #

  //to solve, first create a new holder array
  let mask = []

  //then check the length of the provided string
  if (cc.length > 4) {
    //form the original string into an array and reverse it
    let array = cc.split("").reverse()

    for (let i = 0; i < array.length; i++) {
      if (i < 4) {
        mask.push(array[i]) //untouched
      } else {
        mask.push("#") //mask
      }
    }

    //return our masked string, reversed and joined
    return mask.reverse().join("")
  } else {
    return cc //too short, return as-is
  }
}

/*
  Ember's Feedback:
  - Great job :D
  - Not entirely convinced the reverse() are necessary, could just say
    if (i > array.length - 4 )
*/
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
