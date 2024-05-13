//split items from the iterable list
//make sur the items are splice int sea
//apparently they do not need to be split, won't work with arrays
//iterate through and find te current character if it is not eay push , set char as current har

var uniqueInOrder = function (iterable) {
  const arr = []
  let currentChar;
  for (const char of iterable) {
    if (char != currentChar) {
      arr.push(char)
      currentChar = char;
    }
  }
  return arr;
}
/*
  Ember's Feedback:
  - IDK what that last pseudocode line is supposed to mean
  - Good job! .split was not working because it is a method only available on strings.
    This function is given both arrays and strings as arguments. That was the learning moment
    for this particular exercise.
  - Good job! You wrote a good solution that is useful for both input types
*/
// Alternative Solution
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
