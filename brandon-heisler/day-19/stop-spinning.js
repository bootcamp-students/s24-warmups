function spinWords(string) {
  'use strict'
  let wordArray = string.split(' ');

  let stringMap = wordArray.map((x) => {
    if (x.length >= 5) {
      return x.split('').reverse().join('');
    }
    return x
  })
  return stringMap.join(' ')

}

// i want to take the given string and split it into an array so i can manipulate it
// after that ill map the array out and check the length of each word
// if the word length is greater or equal to 5, ill pull that word, reverse it then join
// then join everything together.

/*
  Ember's Feedback:
  - Great job!
  - You put all the lego pieces together and got a great solution :D
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
