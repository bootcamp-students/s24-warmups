function getElement(array, indexes) {
  let currentArray = [...array];

  for (let i = 0; i < indexes.length; i++) {
    currentArray = currentArray[indexes[i]];
  }
  return currentArray;
}

// Takes an array that can have multiple arrays inside of it. It also gives us the indexes of the element we
// want to retrieve

// It is expecting me to return the value held within the index that it asks for

// [[1, 2], [3, 4], [5, 6]], [0,0]), 1

// I could not handle for deeply nested arrays, I could not retrueve the correct value

// Loop through the indexes and operate on a clone of the array that updates for each iteration adn return the final
// result
