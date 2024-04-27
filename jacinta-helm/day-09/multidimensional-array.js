function getElement(array, indexes) {
//   const array [''];
//   let indexes = array.findIndex(index > 0);
// .findIndex searches for a "thing" inside of the array that passes the given test function.
// We have no idea what the "thing" we are searching for is though, we only have its position.

//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   return;
// }

  let currentIndex = array;
  for (const index of indexes) {
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}

// Create a function that returns an element from the multidimensional array length
// R return a function calculates the array and index by finding that number.
// E (['one', 'two', 'three'], [2]), 'three');
// C my concern comes from not being able to comprehend the question that it's asking.

/*
  Ember's Feedback:
  - Yeah this one is a little confusing in terms of prompt because y'all are still new to arrays.
  - You are tasked with writing a function that takes an array of stuff. That stuff is arbitrary in its form
    and the array is arbitrary in its length. You assume for the sake of this problem, that this input array of
    stuff will in fact work when paired with the 2nd parameter.
    The 2nd parameter is a list of positions. It is a list of numbers that represent an index in the array,
    but not only that, it represents indexes for things nested inside the given array.
    So what you had to do was drill into the given array using the list of positions provided.
    We must assume that list of positions is correct (our program would error as written if the 2nd param
    did not in fact match the content of the 1st parameter)
*/
