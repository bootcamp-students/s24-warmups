/*
Instructions: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
Example: 
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
             should be 6: [4, -1, 2, 1]
Params: Given an array or integers
Return: the greatest possible sum
Concerns: accessing subsequences 
Solution: iterate through the array, maybe use for each, then find the sum of every possible iteration (first, first plus second, sum plus third, etc)
Given code:
var maxSequence = function(arr){
  // ...
}
*/

//The crux is that you're given an array of values, and you want to find the largest continuous sum of the original list
// You basically want to remove negative values but not really because you need to respect the order
// The positive numbers are valid subsequences 

/*
Kadane's Algorithm: https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm
*/

var maxSequence = function(arr){
    //establish current sum and keep track, this is basically tracking the subarray sum
    let currentSum = 0
    //look at max sum, which is basically in tandem with currentSum
    let maxSum = 0

    //this for loop will add the currentNum to the currentSum for each iteration
    for(let i =0; i < arr.length; i++){
      //pull current number as the index i of the array
      let currentNum = arr[i]

      //factor that into currentSum
      currentSum = Math.max((currentSum + currentNum), 0)

      //adjust maxSum
      maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
  }
