function getElement(array, indexes) {
//   const array [''];
//   let indexes = array.findIndex(index > 0);
  
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

//Create a function that returns an element from the multidimensional array length
//R return a function calculates the array and index by finding that number. 
//E (['one', 'two', 'three'], [2]), 'three');
//C my concern comes from not being able to comprehend the question that its asking.
