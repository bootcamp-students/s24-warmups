function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
  //Declare highest and lowest
  //Use Math.min and math.max to get lowest and highest number
  //return Max and Min numbers
}
/*
  Ember's Feedback:
  - Good job!
  - file name should be all lower case
*/
// Alternative Solution
function highAndLow(numbers) {
  let numArr = numbers.split(' ')
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
