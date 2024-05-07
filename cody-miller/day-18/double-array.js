/*
The map function can accept equations. Because we want to
double what is in the array, we simply just times everything
by the two.
*/

function double(array) {
    let twice = array.map((thing) => thing * 2);
    return twice;
}
/*
    Ember's Feedback:
    - Great job!
    - You could get away with just returning array.map(... because it
        will return to you a new array and you can just return it instead of
        assigning it to a variable
    - For the alternate solution I will show kind of what is happening under the hood for .map
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
