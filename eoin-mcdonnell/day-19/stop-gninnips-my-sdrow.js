//first split with all the spaces
//get the length of all the strings
//if the length is greater than 5 split and reverse and join
//find strings longer than 5 letters
//map functions goes through the array
//if greater than or equal to 5 return word split revere
// else return word
// join all

function spinWords(string) {
  return string.split(" ").map(function (word) {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ")
}

/*
  Ember's Feedback:
  - Great job!
  - Be proud, this is great work :D
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
