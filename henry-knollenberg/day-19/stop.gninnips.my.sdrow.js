/* Split into an array by " "
  iterate through array,
    if length is greater than 5, then reverse
  return new array
  join the new array by " "
  return the new string
  */

function spinWords(string) {
  let array = string.split(" ");
  let reversedArray = array.map((x) => {
    if (x.length >= 5) {
      let splitX = x.split("");
      let reversedX = splitX.reverse();
      return reversedX.join("");
    } else {
      return x
    }
  })
  return reversedArray.join(" ");
}
/*
  Ember's Feedback:
  - Great work!! Really great solution :D
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
