function pigIt(str) {
  return str.replace(/(\w+)|(\W+)/g, function (match, word, punctuation) {
    if (word) {
      return word.slice(1) + word[0] + "ay";
    } else {
      return punctuation;
    }
  });
}

// Use regex notation to replace desired words
// Regex can handle the "other" part of words well

/*
  Ember's Feedback:
  - no mime type on file, what happened this week???
  - Interesting solution! Good job :D
  - Excellent use of RegEx
*/

// Alternative Solution
function pigIt(str) {
  // ReGex: matches any consecutive word characters, which excludes punctuation and empty space
  return str.replaceAll(/\w+/g, (match) => match.slice(1) + match[0] + 'ay')
}
/*
  Take the first letter of each word and -
  move it to the end of the word. Add 'ay' -
  to the end of each word as well.
  PRECEPT
  Params - string
  Return - string
  Example - 'Hello world !' => elloHay orldway !
  Concerns -
      strings are immutable in js
      how to handle single letters?
      ignore punctuation
  Explain -
      I will only look at the words in the input sentence.
      For each word, I will remove the first letter and move it to the end of the word.
      I will then append 'ay' to the end of this new word.
      I will put my words back into my sentence and return the result.
  Positive Self Talk - I have done string manipulation by words many times.
  Translate - I will move my logic into line comments in my function and implement it in JS!
*/
