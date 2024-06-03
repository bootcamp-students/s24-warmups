function pigIt(str) {
  // Split the string into an array
  let words = str.split(' ');

  // loop through each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // Checking if the word contains only alphabetic characters
    if (/^[A-Za-z]+$/.test(word)) {
      // Move the first letter to the end and add "ay"
      let firstLetter = word[0];
      let restOfWord = word.slice(1);
      words[i] = restOfWord + firstLetter + 'ay';
    }
    // If the word ends with punctuation, keep it at the end
    if (/[\W]$/.test(word)) {
      let punctuation = word[word.length - 1];
      words[i] = words[i].slice(0, -2) + punctuation;
    }
  }

  // Join the words back into a string
  let result = words.join(' ');

  return result;
}

/*
  Ember's Feedback:
  - Great work!
  - Excellent use of RegEx :D
*/

// Alternative Solution
function pigIt(str) {
  // ReGex: matches any consecutive word characters after a break-word character (e.g. empty space)
  return str.replaceAll(/\b(\w+)/g, (match) => match.slice(1) + match[0] + 'ay')
}
/*
  Take the first letter of each word and -
  move it to the end of the word. Add 'ay' -
  to the end of each word as well.
  PRECEPT
  Params - string
  Return - string
  Example - 'Hello world !' => elloHay orldway !
  Concerns -
      strings are immutable in js
      how to handle single letters?
      ignore punctuation
  Explain -
      I will only look at the words in the input sentence.
      For each word, I will remove the first letter and move it to the end of the word.
      I will then append 'ay' to the end of this new word.
      I will put my words back into my sentence and return the result.
  Positive Self Talk - I have done string manipulation by words many times.
  Translate - I will move my logic into line comments in my function and implement it in JS!
*/
