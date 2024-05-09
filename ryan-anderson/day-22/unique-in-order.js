var uniqueInOrder = function (iterable) {
  if (iterable.length < 2) {
    return iterable.split('')
  } else {
    let unique = [iterable[0]];
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i - 1]) {
        unique.push(iterable[i])
      }
    }

    return unique
  }
}

// for loop over array
// add character to new array if it does not equal character before it

/*
  Ember's Feedback:
  - ok good job! I get what you did now. The length < 2 is confusing.
  replace that if / else with this if(iterable.length === 0) return []
  - I don't get what the split is for length < 2, because that would throw an error for small arrays
*/
// Refactor
let uniqueInOrder = function (iterable) {
  if (iterable.length === 0) return [];

  let unique = [iterable[0]];
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      unique.push(iterable[i])
    }
  }

  return unique
}
// Alternative Solutions
// Filter isn't guaranteed to be available as a method, but you can still call it on a string in the following way
// .call is a method that exists on functions
function uniqueInOrder(iterable) {
  return Array.prototype.filter.call(iterable, (value, index, array) => value !== array[index - 1]);
}
// Here is how you would tailor your approach based on the input type
var uniqueInOrder = function (iterable) {
  // I need to handle mixed input
  switch (typeof iterable) {
    case "string":
      // a solution from a previous kata, remove adjacent duplicates in a string
      return iterable.replace(/(.)\1+/g, "$1").split("");
    case "object":
      let uniqueList = [];
      // iterate over the input array
      return iterable.reduce((accumulator, currentValue, index, array) => {
        // remove adjacent duplicates, respecting case sensitivity
        if (currentValue !== array[index + 1]) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, uniqueList);
  }
};
/*
    PRECEPT
    Params - string | number[] | string[]
    Returns - string[] | number[]
    Example - 'AAAABBBCCDAABBB' => ['A','B','C','D','A','B']
    Concerns - using the wrong method on the wrong input
    Explain -
        I need to iterate over the input and remove adjacent duplicates, -
        respecting case sensitivity.
        Don't reorder the elements.
    Positive self talk - I have solved a similar katas before.
    Translate - I will put my logic lego pieces as inline comments.
*/
/*
  Regex explanation:
  (.)\1+
  1st Capturing Group (.)
    . matches any character (except for line terminators)
  \1 matches the same text as most recently matched by the 1st capturing group
  + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)

  in .replace, you give the "$1" meaning replace everything in the match with what was in the first capture group
  aaaaaaaaaaaaaaaaaaaaaaa => a
  (a) is captured, so all the a's are replaced with just the 1st a :P
*/



// My initial attempt included everything below, before I realized I needed to use push
// instead of += to keep unique as an array

//     }
//   if (unique.length < 2) {
//     return unique
//   } else if (typeof iterable[0] === 'number') {
//       console.log(unique)
//       return (unique.split('')).map(num => num.toNumber())
//   } else {
//    return unique.split('')
//     }
//   }
