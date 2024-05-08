function spinWords(string) {
  //function takes a string
  //needs to return a string but with all words five letters or longer reversed

  //to solve, first split the string into an array by spaces
  let array = string.split(" ")

  //then loop over the array, checking if any entry is longer than five letters
  //if it is, split THAT element into an array, reverse() and join() it, then replace the original
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      let strArr = array[i].split("")
      strArr.reverse()
      array[i] = strArr.join("")
    }
  }

  //once we're done, join the array by spaces and return
  return array.join(" ")
}
/*
  Ember's Feedback:
  - Great job! Lovely pseudocode as always :)
  - snake case is for python :P 🐍
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
