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

// I could not handle for deeply nested arrays, I could not retrieve the correct value

// Loop through the indexes and operate on a clone of the array that updates for each iteration adn return the final
// result

/*
  Ember's Feedback:
  - Good job!
  - The spread syntax to create a copy of the input array isn't actually necessary for this function specifically.
    I'll explain why. It is fine you did it, it is just added operations that aren't necessary.
    So let us say we had this line of code:
      let currentArray = array;
    What that line would do is, it would go get the value out of the variable "array", which due to its name
    we can assume that value will always be an array. We are assuming this function is always written to be
    called with the value given as the first argument is an array, by ourselves or other programmers.
    Because we named our parameter 'array'.) Anyway, ok so we are assuming the variable named "array" will have
    an array value in it. JavaScript will find that array value in "the heap" which is just a spot in memory where
    that is stored, and it will take the memory address and assign a copy of the address to the variable currentArray.

    So, that means if we modified the array in place it would affect the array that was passed as an argument to our function.
    What you did making a copy is good practice, but for this function it is unnecessary because on the first iteration of -
    the for loop, we override that address value in the variable currentArray with the address value of whatever array we may have found.

    If we did find an array, we could still affect it if we modified it. Just because it is nested doesn't mean it isn't affected.

    That was a super long winded attempt at explaining what "passed by reference" vs "passed by value" means in JS. It will probably
    become important when we get to React.
*/
