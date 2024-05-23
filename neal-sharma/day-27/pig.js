/*
parameters- move the first letter of each word to the end and add ay to the end as well
return- the string with the letters moved for pig latin.
example- pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
concerns- not sure how to go about it yet. Will most likely need google; how to handle punctuation?
explain- split string into words, loop over them starting at the first index instead of 0,
for each word we remove the first letter and add it to the end with ay. we make this equal to
split[i]. then we return split by joining back together as words. added regex for exclamations etc.
*/

function pigIt(str) {
  let split = str.split(' ');

  for (let i = 0; i < split.length; i++) {
    if (/^[a-zA-Z]+$/.test(split[i]))
      split[i] = split[i].slice(1) + split[i][0] + 'ay';
  }

  return split.join(' ')
}

/*
  Ember's Feedback:
  - Great job!
  - Good use of RegEx :D
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
