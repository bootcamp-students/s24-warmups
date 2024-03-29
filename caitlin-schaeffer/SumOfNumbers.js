// Sum of Numbers kata
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
// Simplest solution is the min/max function, or you could do if-else if-else functions establishing the values of a and b to return the correct sums
// function getSum(a,b); {
// let min = Math.min(a, b);
// let  max = Math.max(a, b);
   // return (max - min + 1) * (min + max) / 2;
// }
// return sum 
// This code returned error, so try the if/else stuff
function getSum(a,b); {
let sum = 0
// set the sum to zero, which is normal, but then set the function to produce a first
if (a === b) {
    sum = a;
}
else if (a < b) {
    // set the integer to a
    for (let i = a; i >= b; i--) {
        sum += i }
    }
    else {
        for (let i = b; i >= a; i--) {
            sum += i;
        }
    }
    return Sum
}
