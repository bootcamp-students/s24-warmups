function spinWords(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  return words.join(' ');
}

//P string of words
//R string with words reversed if the word is 5 or more characters long
//Example ("Welcome"), "emocleW"
//"Hey fellow warriors"), "Hey wollef sroirraw"
//C a concern could be that there are no words with more than 5 letters in it.
//Explain i will split the string to separate each one. see if the length of words are greater than or equal to 5
// an use the reverse method to check for if the word is greater than or equal to 5 letters
// and finish by joining the strings back together.

/*
  Ember's Feedback:
  - wonderful job! :D
  - You should be really proud! You have taken all these little pieces of logic
    from all of your katas and put them together into a new solution :D
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
