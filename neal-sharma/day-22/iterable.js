/*precept
parameters- take a sequence of letters or strings remove any repeating elements and keep
original order.
return- return sequence w/ out any repeating elements in original order given.
example- uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
concerns- this is similar to my whiteboard interview. I get the parameters but not sure
how to accomplish it yet.
explain-
positive self talk- we made it
translate-
*/

var uniqueInOrder = function (iterable) {
  let result = []; // declare result as empty array
  for (let i = 0; i < iterable.length; i++) { // loop through iterable
    if (iterable[i] !== iterable[i - 1]) { // if current index does not equal last index checked
      result.push(iterable[i]); // then push the current index to the result array
    }
  }
  return result; // return result array
}
/*
  Ember's Feedback:
  - Excellent job!
  - For the first loop, iterable[0 - 1] would return undefined, which is fine because
    undefined not equalling iterable[0] is what we want anyway.
*/
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
