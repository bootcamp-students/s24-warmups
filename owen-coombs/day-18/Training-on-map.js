function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
  const doubledNumbers = array.map((x) => x * 2);
  return doubledNumbers
}
// used map
// created var for double numbers
// *2
/*
  Ember's Feedback:
  - Great job!
  - Map is really useful, especially in React to turn your data into JSX
  - rename this file to be all lowercase
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
