function double(array) {
  return array.map((i) => {
    return i * 2;
  });
}

// an array of integers

// wants me to return an array of the same length doubling all of the numbers individually

// [1,2,10,57], [2,4,20,114]

// I could do the math incorrectly or format the final string incorrectly

// Take the first array, map over it and double each integer. return that new array.

// I can do this!

/*
  Ember's Feedback:
  - Great solution!
  - map is really nice because it allows you to copy an array and apply changes to it as necessary.
    It is most helpful in React when you want to turn your data into JSX.
  - Below is an example of how one would make a prototype function from scratch.
    This is what map is doing under the hood more or less.
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
