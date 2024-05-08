//Parameter-.map
//return-new array with amounts doubled
//example- let newArray = array.map(x) => x * 2
//concerns- none
//explain- we use the map function to examine each element of the array
//we add x => x * 2 to multiply each element by two and return the new array.

function double(array) {
  const newArray = array.map(x => x * 2)
  return newArray

}
/*
  Ember's Feedback:
  - Good job!
  - Map is a really useful array method, especially for React.
    You turn your array of data into an array of JSX to display it with React.
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
