// Ember, I had issues copy and pasting this, i tried to spruce it up before submitting, let me know if it doesnt translate well. have a good one.
function longest(s1, s2) {
 "use strict";

  let concatString = (s1 + s2)

  let lettersArray = concatString.split("")

  lettersArray.sort()

  function removeDupes(data){
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  let resultsArray = removeDupes(lettersArray)
  return resultsArray.join('')
}

/*
i have 2 strings given to me and need to return a sorted string with only 1 of each letter.
strings are immutable so i should combine them into an array, use the array.sort method 
and join the array back into a string and return it.
ive joined strings, split into an array by letter and sorted into order.
now i need go go over each index once. if the letter isnt in a new array, add the letter.
join the results together and success.
*/
