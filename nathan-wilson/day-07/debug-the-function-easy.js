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

// mult and add take arrays of numbers as parameters, reverse takes a string

// Expecting a number return value

// multi([5, 1, 5]), 25

// I could do the math wrong, I could mess up the value types

// take the array and operate on every operand inside of the array not the arrays against each other. Also use the
// currect string method to revers the string.

// I can do this, dont overcomplicate it!
