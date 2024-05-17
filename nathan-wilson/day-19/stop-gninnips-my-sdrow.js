function spinWords(string) {
  return string
    .split(' ')
    .map((e) => {
      if (e.length < 5) {
        return e;
      } else {
        return e.split('').reverse().join('');
      }
    })
    .join(' ');
}

// a string of 1 or more words

// expects the same length string but with words that are 5 or more characters
// long reversed

// "Hey fellow warriors"), "Hey wollef sroirraw"

// I could reverse the wrong words or forget to return a string

// Split the string by its spaces into an array of words, loop through that
// array and check if the word is 5 or more characters long,
// if so split that individual one into a sub array, reverse it, join it,
// and stick it into the array im building

// I can do this! I just need to take it slow and console log as I go

/*
  Ember's Feedback:
  - Great work!
  - Really concise, if you wished you could use a ternary and make it even smaller. I like it!
*/
// using a ternary
function spinWords(string) {
  return string
    .split(' ')
    .map((e) => (e.length < 5) ? e : e.split('').reverse().join(''))
    .join(' ');
}
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
