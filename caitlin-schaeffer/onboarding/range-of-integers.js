// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// note: start < stop and step > 0
function generateRange(min, max, step) {
    // first step is to establish range
    let range = [];
    // establish first possible and use the note start is less than stop and stop is more than zero
    if (max - min < step) {
        // The push() method adds new items to the end of an array.
        range.push(min);
        // establish second possible
    } else {
        // the integer is the minimum number and must be less than max and greater than zero
        for (let i = min; i <= max; i += step) {
            range.push(i);
        }
    }
    return range;
}

/* Ember's Feedback:
    - Good job!
*/
