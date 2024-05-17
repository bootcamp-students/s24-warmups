/* precept
parameters- take a string and and reverse words that are 5 or more letters long
return- same string with words 5 or longer reversed
example- "Hey fellow warriors"  --> "Hey wollef sroirraw"
concerns- not sure what method to use. for loop maybe map
explain- split the string into an array of words. loop over the array. if the length of the
current word is = or greater than 5 we split the word into letters, reverse them, then join
them back together. After the words have been looped over and possibly reversed we join it
the words back together and return the result.
positive self talk- "Embrace your journey, celebrate your growth, and believe in your potential." chatGPT haha
translate-
*/

function spinWords(string) {
  let splitString = string.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length >= 5) {
      splitString[i] = splitString[i].split('').reverse().join('');
    }
  }
  let joinString = splitString.join(' ');
  return joinString;
}
/*
  Ember's Feedback:
  - :P
  - Wonderful solution!
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
