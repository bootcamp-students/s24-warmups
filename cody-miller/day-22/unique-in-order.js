// var uniqueInOrder = function (iterable) {
//   let inputValue = iterable.split("");
//     console.log("Before the loop: ", inputValue);
//   for (let i = 1; i < iterable.length; i++) {
//     if (inputValue[i] === inputValue[i - 1])
//       inputValue.splice(i, 1);
//       console.log("Inside the loop: ", inputValue);
//   };
//   console.log("Outside the loop: ", inputValue);
//   return inputValue;
// };

var uniqueInOrder = function (iterable) {
  return Array.prototype.filter.call(iterable, (value, index, array) => value !== array[index - 1]);
};


/*
The input cannot have a same character next to it.
  Use boolean to determine if the character next to it ===
If else statement; if !== continue onto the next letter and
  that letter become the next boolean check.
Looking behind. length -1.
*/

/*
  Ember's Feedback:
  - Great job!
  - Filter isn't guaranteed to be available as a method, but you can still call it on a string -
    if you get the function definition off the prototype and you pass the string as an argument -
    with .call, which is a method that exists on functions. The first argument to .call is the -
    "this context" which means it is the value in the "this" keyword. All subsequent arguments -
    will be used as arguments provided to the function itself.
*/
// Alternative Solution
// Here is how you would tailor your approach based on the input type
var uniqueInOrder = function (iterable) {
  // I need to handle mixed input
  switch (typeof iterable) {
    case "string":
      // a solution from a previous kata, remove adjacent duplicates in a string
      return iterable.replace(/(.)\1+/g, "$1").split("");
    case "object":
      let uniqueList = [];
      // iterate over the input array
      return iterable.reduce((accumulator, currentValue, index, array) => {
        // remove adjacent duplicates, respecting case sensitivity
        if (currentValue !== array[index + 1]) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, uniqueList);
  }
};
/*
    PRECEPT
    Params - string | number[] | string[]
    Returns - string[] | number[]
    Example - 'AAAABBBCCDAABBB' => ['A','B','C','D','A','B']
    Concerns - using the wrong method on the wrong input
    Explain -
        I need to iterate over the input and remove adjacent duplicates, -
        respecting case sensitivity.
        Don't reorder the elements.
    Positive self talk - I have solved a similar katas before.
    Translate - I will put my logic lego pieces as inline comments.
*/
/*
  Regex explanation:
  (.)\1+
  1st Capturing Group (.)
    . matches any character (except for line terminators)
  \1 matches the same text as most recently matched by the 1st capturing group
  + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
  in .replace, you give the "$1" meaning replace everything in the match with what was in the first capture group
  aaaaaaaaaaaaaaaaaaaaaaa => a
  (a) is captured, so all the a's are replaced with just the 1st a :P
*/
