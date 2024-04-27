/*precept
parameters- given an array find the one that appears an odd number of times
return- return the number that appears an odd number of times
example- [1, 1, 2] return two because it shows once which is an odd number of times.
concerns- just finding the right method to use. 
explain- tried with reduce and wasn't getting there. decided to use forEach.
first create a an empty object to store the count of each number. loop through each number.
increment the count for each number in the object. if num doesn't exist init its count to 1.
using for loop. Loop over each number in object. check if count of current number is odd.
if count is odd, return the Number. 

positive self talk- My head wasn't in the game today. Once I got it didn't seem 
that difficult. But today is the anniversary of my sisters passing. Its been an emotional day
just like it is every year. But just like every year I got through it. Tomorrow is another day
with another opportunity.
translate-
*/

function findOdd(A) {
    //   let count = A.reduce((acc, curr) => A % 2 !== 0);
    //   let result = Number(odds)
    //   console.log(result);
    //   return result;
      let count = {}; // empty object to store the count of each number
      
      A.forEach(num => { // loop through each number in array
        count[num] = (count[num] || 0) + 1; // Increment the count for the current number in the object
        // If the number doesn't exist in the object, initialize its count to 1
    });
    
      
      for (let num in count) { // loop through each unique number in count object
        if (count[num] % 2 !== 0){ // check if count of current number is odd
          return Number(num); // if count is odd return the number. Needed Number here otherwise
          //it was returning a string.
        }
      }
      
      
    }