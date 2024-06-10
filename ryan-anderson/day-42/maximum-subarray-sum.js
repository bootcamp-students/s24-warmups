var maxSequence = function(arr){
    if (arr.length === 0) {
      return 0    // returns 0 for empty array
    }
    let sum = 0
    let sums = []
    for (let i = 0; i < arr.length; i++) {    // for each item in array, checks sum of every sequence beginning at that number
      sum = 0   // resets sum iterator at the beginning of checks for each item
      for (let j = i; j < arr.length; j++) {
        sum += arr[j]   // calculates sum from arr[i] to each subsequent item
        sums.push(sum)  // adds each sum to sums array
    }
    }
    let max_sum = sums[0]   // finds highest sum, since Math.max doesn't work on an array
    for(let k = 1; k < sums.length; k++) {
      if (sums[k] > max_sum) {
        max_sum = sums[k]
      }
    }
    if (max_sum < 0) {
      return 0    //returns 0 for array of all negative numbers
    } else {
      return max_sum
    }
  }
  
  // find the sequence in the array with the highest sum
  // do a for loop starting at each positive integer, checking sums of every sequence beginning there
    // add each sum to an array, then return the max of that array
    // don't need to check sequences starting at negative numbers since higher sum would be achieved by excluding them