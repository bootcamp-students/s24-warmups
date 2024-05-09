var uniqueInOrder = function (iterable) {
  let newArray = typeof iterable != 'object' ? iterable.split('') : iterable;
  let finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== newArray[i + 1]) {
      finalArray.push(newArray[i]);
    }
  }
  return finalArray;
};

// A sequence of data

// Returns the same type of data structure without repeating values

// ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

// I could return the wrong data type, or my calculation might not
// be data type agnostic

// Loop through iterable if its not an object and add the current indexes value
// only if the next one isn't the same value

/*
  Ember's Feedback:
  - Good job!
  - If you want, you can also use Array.isArray() to determine if something is an array not
*/
// Alternative Solutions
// Filter isn't guaranteed to be available as a method, but you can still call it on a string in the following way
// .call is a method that exists on functions
function uniqueInOrder(iterable) {
  return Array.prototype.filter.call(iterable, (value, index, array) => value !== array[index - 1]);
}
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
        // remove adjacent duplicates, respective case sensitivity
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
