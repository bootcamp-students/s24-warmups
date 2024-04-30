/*precept
parameters- take a sequence of letters or strings remove any repeating elements and keep
original order.
return- return sequence w/ out any repeating elements in original order given.
example- uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
concerns- this is similar to my whiteboard interview. I get the parameters but not sure 
how to accomplish it yet.
explain- 
positive self talk- we made it
translate-
*/

var uniqueInOrder=function(iterable){
    let result = []; // declare result as empty array
    for (let i = 0; i < iterable.length; i++) { // loop through iterable
      if (iterable[i] !== iterable[i - 1]) { // if current index does not equal last index checked
        result.push(iterable[i]); // then push the current index to the result array
      }
      } console.log(result);  
    return result; // return result array
  }