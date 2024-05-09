/*
Instructions: Write a function that takes in a string of one or more words, and returns the same string, but with all words
that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one word is present.
Example: "Hey fellow warriors"  --> "Hey wollef sroirraw" ; "This is a test   --> "This is a test"
Params: given a string
Return: a string
Solution: split the string into an array of words, map each word to check if it's length is 5 or >, reverse if so, return a new array joined back together.

Given Code:
function spinWords(string){
  //TODO Have fun :)
}
*/

function spinWords(string) {
  let newWords = string.split(" ")

  let reverseWords = newWords.map((words) => {
    if (words.length >= 5) {
      return words.split("").reverse().join("")
    }
    return words

  })
  return reverseWords.join(" ")
}
/*
  Ember's Feedback:
  - Great job!!
  - You took all those lego pieces and put them together into something beautiful :')
*/
// Alternative Solution
function spinWords(string) {
  // break the string into an array of words
  let wordsArray = string?.split(" ");
  // if the array is empty or wordsArray is undefined, the input was bad
  if (!wordsArray || !wordsArray.length) return string;
  // write a function to reverse words
  const reverseWord = (word) => word.split("").reverse().join("");
  // figure out if any words are larger than 5 characters and reverse them
  let spinedWordsArray = wordsArray.map((word) =>
    word.length >= 5 ? reverseWord(word) : word
  );
  // return the mutated data back as a string
  return spinedWordsArray.join(" ");
}
/*
    PRECEPT
    params: string
    return: string
    example: "Hey fellow warriors" => "Hey wollef sroirraw"
    concerns: no input, invalid input
    explain:
        If I detect a word in the string that is over 5 characters, reverse the word.
        Return a modified string.
    positive self talk: I know how to reverse strings already and how to break up strings by words!
    translate: put my pseudocode into comments and solve the problem with JS!
*/
