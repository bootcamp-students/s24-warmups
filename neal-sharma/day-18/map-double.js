/*precept
parameters- map each value and double it
return- new array with each value doubled.
example- [1,2] return [2,4]
concerns- haven't done much with map() but i'm ready
explain-  map over the array and double each number
positive self talk-
translate-
*/

function double(array) {
  const doubled = array.map((x) => x * 2);
  return doubled;
}
/*
  Ember's Feedback:
  - Great job :D
  - Below I demonstrate what map kind of looks like under the hood
*/
// Alternative Solution
function double(array) {

  // This is what .map is. It is a function that exist on all instances of arrays because of prototype inheritance
  Array.prototype.customMap = function cutomMap(userFunction) {

    if (typeof userFunction !== 'function') throw `${typeof userFunction} is not a function`

    let returnArray = [];

    // "this" here is a way you can get the value of the thing that the function was called on.
    // so here, "this" is an array and specifically it is whatever is stored in the array variable we call .customMap on
    for (let i = 0; i < this.length; i++) {
      returnArray.push(userFunction(this[i], i, this))
    }

    return returnArray
  }

  // customMap works because we added it to the Array prototype above.
  // When we call customMap we give it a function to run on every element. (element => element * 2)
  return array.customMap(element => element * 2)
}
