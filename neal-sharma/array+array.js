/ get the sum of two arrays and all their elements. (each array is only numbers & so is the output)
// array = array []
// array is meant to store data globally
//elements = objects
// [array] + [array] = sum
// example const array = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < array.length; i++);
// sum += array[i];
// console.log(sum)


function arrayPlusArray(arr1, arr2) {
  
  let sum1 = arr1.reduce((acc, cur) => { // acc=accumulator // cur = current
    return acc += cur // return accumulator + current
  })
  let sum2 = arr2.reduce((acc, cur) => {
    return acc += cur
  })
  return (sum1 + sum2) 
  
  }
  //let bothArray = arr1.concat(arr2);
  // [1,2,3,4,5,6]
  //let returnValue = 0;
  //for ( let value of bothArray ) {
   // returnValue += value;
  //}
  //console.log(returnValue);
 
// for(let counter = 0; counter < arr1.length; counter++){
  // returnValue += arr1[counter]; // another way to do this.

// - params - arr1, arr2, - they are arrays
  // - return number 
  // - example - [1,2], [3,4] => 10;