function spinWords(string) {
  //Split up string into an array of individual words
  //loop through an array of words to see if/if not equal to 5
  //If word is greater than 5, reverse it
  //If word is less than 5, keep it the same
  //Return new array with manipulated items
  //join the new array into a string and return final value
  return string.split(" ").map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ");
}
/*
  Ember's Feedback:
  - file name does not conform to the class naming convention
  - Good job
*/
