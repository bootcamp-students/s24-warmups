var uniqueInOrder = function (iterable) {
  console.log(typeof iterable, iterable);
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
// only if the next one isnt the same value
