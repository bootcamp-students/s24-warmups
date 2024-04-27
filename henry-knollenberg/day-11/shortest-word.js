/* Parameters - Shortest Value, String, Array, Index of Array
  Return - Shortest Value
  
  Split the string into an array.
  Set the Shortest Value to the length of the first index of the array.
  
  Iterate over the array =>
    Compare the Shortest Value to each index's length.
    If the index's length is shorter, then reset the Shortest Value to that length.
    
  Return the final Shortest Value.
*/

function findShort(s){
    let arr = s.split(" ");
    let shortestValue = arr[0].length;
    
    for (let index of arr) {
      if (shortestValue > arr[arr.indexOf(index)].length) {
        shortestValue = arr[arr.indexOf(index)].length;
      }
    }
    
    return shortestValue;
  }