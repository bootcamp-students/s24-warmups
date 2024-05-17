//string
//string with one or more words reversed
//split the string, reverse then join.
//syntax issues
//I need to split the word in a string and reverse that word if it is greater
//or equal to five characters.  Loop over each word split/reverse/join those words
//but allow less than five to print as normal.

function spinWords(string) {
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  return words.join(' ');
}
/*
  Ember's Feedback:
  - Good job!
  - This is putting together a lot of different concepts you've
    seen up to this point and combine them together :D
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
