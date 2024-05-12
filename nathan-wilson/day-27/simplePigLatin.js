function pigIt(str) {
  let splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    if (/^[a-zA-Z]+$/.test(splitStr[i])) {
      let letters = splitStr[i].split('');
      let letterToAdd = letters[0];
      letters.shift();
      letters.push(letterToAdd);
      letters.push('ay');
      splitStr[i] = letters.join('');
    }
  }
  return splitStr.join(' ');
}

// Takes a string of words

// Wants me to return a string of words

// 'Pig latin is cool','igPay atinlay siay oolcay'

// I could have a type error or incorrectly loop

// Take the string, split it by its spaces, then loop over each word, split those by
// their letters, then remove the first letter, place it at the end, and add ay.
// then join the letters back together and join the whole sentence back together

// I can do this

/*
  Ember's Feedback:
  - file name does not conform to the class convention
  - Good job! great use of the test function :D
  - You could do line 6 as let letterToAdd = letters.shift(); because shift returns the element it removes.
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
