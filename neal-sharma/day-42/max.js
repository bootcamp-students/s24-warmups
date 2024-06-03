// parameters- sum the numbers in the array.
// if the numbers are all negative return 0 instead
// if the array is empty return 0
// return- sum of numbers in the array
// example- ([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// got help because i wasnt understanding the question correctly. We dont just want the
// total sum of the array. we want the max number from sub array rather than the whole array.
// example max(1 + 1 -1) = 1, max(2 + 2 -1) = 3
// endMax would be endMax(1, 3)
// so endMax returned would be 3. chatGPT mentioned Kadane's algorithm which i dont really get
// but i know it exists now at least. haha

var maxSequence = function(arr){
    if (arr.length === 0) {
      return 0; // if array length = 0 return 0
    }
    
    if (arr.every(num => num < 0)){
      return 0; // if every number in the array is less than 0 return 0
    }
    let max = 0;
    let endMax = 0;
    for (let i = 0; i < arr.length; i++){ // loop
      max = Math.max(0, max + arr[i]); // if max + arr[i] is negative reset count to 0
      endMax = Math.max(max, endMax) // ex- (0 + 0 + 1) = 1 (-1 + 1 -2) will = 0 because we want max
    } // endMax (1, 0) end max would be 1.
    
    return endMax
  };