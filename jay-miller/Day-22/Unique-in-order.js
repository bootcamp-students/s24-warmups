var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  // Make a new empty array
  let arr = [];
  // Use a for loop using .length on iterable
  // Check if there is back to back letter
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
        // If not then push current value to array
      arr.push(iterable[i]);
    }
  }
  // Return Array
  return arr;
}
