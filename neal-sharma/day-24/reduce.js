function sum(array) {
    let reducedArray = array.reduce((acc, curr) => acc + curr)

    return reducedArray;
}
/*
  Ember's Feedback:
  - Great job!
  - If you have a single element in your array, .reduce will return that element and never run your function.
    However; if you provide an initial value, it will run your function one time.
    .filter() and .map() are perfectly fine if you call them on an empty array.
    They will not run your function and will return to you a new, empty array.
    .reduce will however throw a fit (an error)
    If you give .reduce an initial value and you call it on an empty array it will not run your function and it will not throw an error.
    Instead it will simply return to you the initial value as the return from the function.
    image demonstrating the above behavior in the browser console:
    https://files.slack.com/files-tmb/T06MCB90BT9-F072X85HREC-57d64ceed0/image_720.png
*/
