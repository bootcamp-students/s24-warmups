//parameters - reduce function
//return - sum of values in the array
//example - var someNumbers = [1,2,3,4,5,6,7,8,9,10];
//// should return 55
//concerns - none.  Should be pretty straight forward
//explain - used array.reduce to calculate the sum of the array 
//positive self-talk - Should be an easy one! 
//translate


function sum(array) {
 let sum = array.reduce((acc, cur) => acc + cur)
 return sum 
}
