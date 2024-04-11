function multi(arr) {
  return arr.reduce((acc, cur) => {
    return acc * cur;
  });
}

function add(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}

function reverse(str) {
  return str.split('').reverse().join('');
}

//P debug the function to fit the need of what its asking,
// R the function should multiply and add and reverse all the elements in the array 
//E (multi([5,1,5]), 25)
//C i could do the math wrong or miss a syntax correction for this funtion to not work.
