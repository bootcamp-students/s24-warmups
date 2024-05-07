function spinWords(string) {
  let splitString = string.split(" ");

  let mappedString = splitString.map((x) => {

    if (x.length >= 5) {
      return x.split("").reverse().join("");
    }

    return x;
  });

  return mappedString.join(" ");
}

/*
We receive a string.
  Use string methods.

I need to check to see if each word in the string is 5 letters or longer.
  Have to iterate. So maybe map over apply an equation/condition.

If the word is longer than 5 letters, it needs to be reversed.
  Use the reverse method built in.

String should be put back together and returned.
  Use join method.
*/

/*
  Ember's Feedback:
  - Great work!
  - You combined a bunch of small things you did previously into a new problem! :D
    Be proud of your progress :)
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
