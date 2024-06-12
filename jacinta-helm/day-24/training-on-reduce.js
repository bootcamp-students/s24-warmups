function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  let initialValue = 0
  const sum = array.reduce((acc, cur) => acc + cur);
  return sum;


}

/*
Parameters- create a function that uses reduce to find the sum of of the values
Return- my function should return the sum of the values using the array.reduce method.
Example- [1,2,3,4,5,6,7,8,9,10] = 55
Concern- I have a syntax error in my method.
Explain- I will use the reduce method and iterate over the acc and add each acc to the current value.
*/

/*
  Ember's Feedback:
  - Great job!
  - you didn't end up using the initial value so remove unused variables in the future.
  - If you have a single element in your array, .reduce will return that element and never run your function.
      However; if you provide an initial value, it will run your function one time.
      .filter() and .map() are perfectly fine if you call them on an empty array.
      They will not run your function and will return to you a new, empty array.
      .reduce will however throw a fit (an error)
      If you give .reduce an initial value and you call it on an empty array it will not run your function and it will not throw an error.
      Instead it will simply return to you the initial value as the return from the function.
      image demonstrating the above behavior in the browser console:
      https://files.slack.com/files-tmb/T06MCB90BT9-F072X85HREC-57d64ceed0/image_720.png
*/
