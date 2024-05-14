//parameters - String of letters
//return - new array with items separated by space, comma and ''.  Items next to each other can't have the same value.
//example - uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//concern - wrong syntax
//explain - I used a for loop to iterate over every item and found different values.  If they are different then they are pushed to the new array.
//positive self-talk - You can do it!
//translate
'use strict';

var uniqueInOrder = function (iterable) {

    const result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i]);
        }
    }

    return result;
}
/*
    Ember's Feedback:
    - Great job! :D
    - Great pseudocode
    - On the last iteration of the for loop i + 1 will be an index that doesn't exist.
      That is fine though, for the logic of this problem.
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
