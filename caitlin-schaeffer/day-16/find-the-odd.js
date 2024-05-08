/*
Instructions: Given an array of integers, find the one that appears an odd number
of times. There will always be only one integer that appears an odd number of times.
Example: [1,1,2] should return 2, because it occurs 1 time (which is odd).
Params: given array
Return: an integer
Solution:

Given Code:
function findOdd(A) {
  //happy coding!
  return 0;
}
*/

// The find() method of Array instances returns the first element in the provided array that satisfies the
// provided testing function.

/* So we're going to first attach the find method, and then in the find function we are going to filter the elements so
that if the modulo is 2 they cannot have a remainder of 0 */

function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
/*
  Ember's Feedback:
  - Great job!
  - Awesome job on the pseudocode
*/
// Alternative Solution
// This is an example of bit manipulation. If you want to know more: MDN search for XOR ^
function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}

/*
Code work out:
the given (A), will return an array of integers
SO:
1. Count each item in an array
2. identify any repeated integer
3. if integer is repeated an odd number of times / return that integer
4. else / return integer that appears once
5. return answer



let elementsIHaveSeen = {}
A.forEach (element => {
  if(elementsIHaveSeen.hasOwnProperty(element)){
      elementsIHaveSeen.hasOwnProperty[element] += 1
  } else {
      elementsIHaveSeen[element] = 1
  }
}
for (let element in elementsIHaveSeen ) {
if (elementsIHaveSeen[element] % 2 !== 0) return Number.(element)
}
return A.find( int => A.filter(el => el === int).length % 2 !== 0);
}
)

Or something like

function findOdd(A) {
  let answer = x

  let Z = (arr) => {
      const counts = new Map();
      arr.forEach((value) => {
          counts.set(value, (counts.get(value) ?? 0) + 1);
          return Object.fromEntries(counts);
      })
      console.log(Z)
  }


  return
}
*/
