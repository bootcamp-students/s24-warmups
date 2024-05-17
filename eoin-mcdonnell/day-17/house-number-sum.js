//numes in the array before the 0
// after you find the 0 in the array stop iterating
// add the remaining figures
// you have an array
// you have a list of items in the array
// one of the items is a 0
// add all the numbers before 0
// split array at 0
// create a new array and
/*-
function houseNumbersSum(inputArray) {
  //coding and coding..
  let newArr = []                         )
  if(let i = 0; i < inputArray; i++){
    if (inputArray[i] === 0)
  }
}
-*/

/*-
function houseNumbersSum(inputArr) {
  let newArr=[];
  for(let i=0;i<inputArr.length;i++)
  if (inputArr[i]===0){
    newArr.push(newArr.splice(0,i));break}
    console.log(newArr)
  return newArr.map(v=>v.reduce((a,b)=>a+b,0))*1;
}

-*/
function houseNumbersSum(arr) {
  let Max = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === 0) { Max.push(arr.splice(0, i)); break }
  return Max.map(v => v.reduce((a, b) => a + b, 0)) * 1;
}
/*
  Ember's Feedback:
  - oh boy, yeah we talked about this is class. This is very convoluted. I would send this back in a code review.
  - splice deletes elements from an array, which means it modifies it in place. You are modifying the input array, which would definitely lead to bugs.
    It is just bad practice.
  - To reiterate what we talked about in person, you have an array then you push an array into it, then you map on it
    just to get at that value you pushed into it, then you reduce that value. Since map though returns that new value in
    an array you need to get it out to return in from the function which means you multiply the array by 1. That strings the array,
    and then it turns it into a number.
    That works, but it is so many unneeded steps and it is really hard to follow what is going on.
    I will refactor it below to show how it could be simplified.
*/
// Refactor
function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0).reduce((a, c) => a + c, 0);
}
// Alternative Solution
function houseNumbersSum(inputArray) {
  // iterate over the array, producing a sum, until I encounter a zero
  let sum = 0;
  for (let int of inputArray) {
    if (int === 0) return sum;
    sum += int
  }
  return sum;
}
/*
  PRECEPT
  params: number[]
  return: number
  example: [5, 2, 0, 3] => 7
  concern: undefined input, empty array input, input has no 0; the description implies these will never happen
  positive: I have summed an array before, this is just that with a stop condition :D
  translate: I will iterate over the array and produce an element summation. If I encounter a zero, -
    I will return from the function as a whole or break the iteration in some way.
*/
