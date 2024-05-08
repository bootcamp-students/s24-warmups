function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
  //   let numbers = []
  //   let numbers = doubledNumbers.map(doubledNumber => number * 2)
  return array.map(element => element * 2)

}

//P create a function that doubles the numbers in the array
// R my function should return the numbers in the array doubled in the answer.
//Example [1,2,3,4,5] is = [2,4,6,8,10]);
// C concern would be syntax or not remembering how to get the answer.
//Explain, use the map over function to make the math and multiply the element by 2.

/*
  Ember's Feedback:
  - Great job!
  - .map is a really common array method, I highly recommend getting super comfortable with it.
  - below I demonstrate what .map looks like under the hood
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
