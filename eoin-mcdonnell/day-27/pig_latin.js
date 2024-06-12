function pigIt(str) {
  //declare variables
  let newArr = [],
    //split the words up
    strArr = str.split(" ")
  //iterate over the words in the array
  strArr.forEach(x => {
    let wordArr = x.split("")
    wordArr.push(wordArr[0], 'ay')
    wordArr.shift()
    //avoid punctuation
    if (x === "!" || x === "?" || x === ".") {
      newArr.push(x)
    } else {
      newArr.push(wordArr.join(""))
    }
  })
  return newArr.join(" ")
}
/*
  Ember's Feedback:
  - needs to be dashes for the JS file name
  - avoid the expression comma expression syntax you had on line 9
    it is better for readability to have it on two lines
  - would be a little more concise and semantic to write this using a .map instead of .forEach
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
