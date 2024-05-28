/*
Instructions: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples: pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
Params: string
Return: string
Concerns: make a copy or mutate the original?
Solution:

Given Code:
function pigIt(str){
  //Code here
}
*/

function pigIt(str) {
  let punctuation = '! " # $ % & ( ) * + , - . / : ; ? @ [ \ ] ^ _ ` { | } ~ '
  let words = str.split(' ')
  // this splits every word up into an array of words, doing words[1] returns the element at that index
  // this first slices off the first letter of every word, then it supplies the first letter of every word to the end of the word and then it adds 'ay'
  // in the if/else, we first check to make sure that the word does not include a punctuation mark, but we have to return word in the else to include punctuation
  let pig = words.map(word => {
    if (!punctuation.includes(word)) {
      return word.slice(1) + word.charAt(0) + "ay"
    } else {
      return word
    }
  })
  return pig.join(' ')
}
/*
  Ember's Feedback:
  - Great job! Wonderful solution :D
*/
// Alternative Solution
function pigIt(str) {
  // ReGex: matches any consecutive word characters, which excludes punctuation and empty space
  return str.replaceAll(/\w+/g, (match) => match.slice(1) + match[0] + 'ay')
  // or
  // this is two capture groups. 1st group is a word character, the second group is many word characters.
  return str.replaceAll(/(\w)(\w+)/g, '$2$1ay')
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
