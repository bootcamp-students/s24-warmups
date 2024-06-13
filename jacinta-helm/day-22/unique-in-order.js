var uniqueInOrder = function (iterable) {
  let result = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  return result;
}


//P create a function that returns a list of items without any elements with the same value.
//R my function should return a new array with elements that don't repeat each other.
//Example ('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']
//Concerns there are no repeated values in the array.
//Explain I can just create a variable for result and last. Use Push method iterating over my array, the indexes. and comparing to the last element.
// making sure that the Index value doesn't equal the last element.

/*
  Ember's Feedback:
  - Great job!
  - I strongly recommend not writing your code like you did on line 7, it makes it harder to read.
    Instead, put a line where you do the variable assignment and then on the next line do the push.
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
