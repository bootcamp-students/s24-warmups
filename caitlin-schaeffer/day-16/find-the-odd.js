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

  /*
  Code work out:
  the given (A), will return an array of integers 
  SO: 
1. Count each item in an array
2. identify any repeated integer
3. if integer is repeated an odd number of times / return that integer
4. else / return integer that appears once 
5. return answer 
  */

/*
Ember:
return A.find(int => A.filter(el => el === int).length % 2 !== 0); 

OR

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
*/