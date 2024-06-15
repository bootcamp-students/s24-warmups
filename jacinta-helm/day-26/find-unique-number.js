function findUniq(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Compare the first two elements and the last two elements
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
  }
  
  
  
  
  
  // Parameters - an array and finding the unique value 
  //Return- my function should return the element that is different out of the array.
  //Examples - 1, 0, 0 ]), 1
  // Concerns- all the numbers are the same, or i don't remember which method to use.
  //Explain- I need to first sort the sort array, I need to compare the first two elements, then the next elements and the last elements. if they are the same, move on to the next elements, if not, thats the unique element. 
  
  
  