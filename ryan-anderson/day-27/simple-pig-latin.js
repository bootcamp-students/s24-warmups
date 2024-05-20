function pigIt(str) {
  function pigify(word) {
    let punct = ['.', '?', '!']
    if (!punct.includes(word)) {
      word = word.slice(1, word.length) + word[0] + 'ay'
    }
    return word
  }
  let newStr = (str.split(' ')).map(word => pigify(word))
  return newStr.join(' ')
}

// split string at spaces
// slice each word at first letter, add it back to end and add 'ay'
// if word is a punctuation mark, do nothing to it

/*
  Ember's Feedback:
  - great job!
  - Because you defined the function pigify you can just pass the function name to .map
*/
// Refactor
function pigIt(str) {
  function pigify(word) {
    let punct = ['.', '?', '!']
    if (!punct.includes(word)) {
      word = word.slice(1, word.length) + word[0] + 'ay'
    }
    return word
  }
  let newStr = str.split(' ').map(pigify)
  return newStr.join(' ')
}
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
