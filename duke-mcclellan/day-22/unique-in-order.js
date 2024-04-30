//parameters - String of letters
//return - new array with items seperated by space, comma and ''.  Items next to eachother can't have the same value. 
//example - uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//concern - wrong syntax 
//explain - I used a for loop to iterate over every item and found different values.  If they are different then they are pushed to the new array. 
//positive self-talk - You can do it!
//translate
'use strict';

var uniqueInOrder=function(iterable){
 
    const result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i]);
        }
    }

    return result;
}
