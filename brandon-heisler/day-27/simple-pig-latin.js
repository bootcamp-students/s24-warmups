function pigIt(str) {
  "use strict"
  let pigWordArray = str.split(" ")
  let finishedString = ""

  for (let i = 0; i < pigWordArray.length; i++) {
    let word = pigWordArray[i]
    let pigWord = ""

    for (let j = 0; j < word.length; j++) {
      let char = word[j]

      if (/[a-zA-Z]/.test(char)) {
        let pigLetterArray = word.slice(j).split("")
        pigLetterArray.push(pigLetterArray.shift())
        pigLetterArray.push("a", "y")
        pigWord += pigLetterArray.join("")
        break;
      } else {
        pigWord += char;
      }
    }
    finishedString += pigWord + " "
  }
  return finishedString.trim()
}
/*
im given a string, i need to change it so that its in pig latin, ignoring
punctuation.
this means i need to take the 1st letter of a word and add it to the
end of the word, and add "ay" after that. pig = igpay
1st I need to make it changeable. so make it into an array
ill loop over the array to break it into words,
then loop over the words' individual characters.
if the character is a letter then move the first letter of the word to the end
add the a and y and make it back into a string then break the loop.
account for punctuation.
rejoin it all together and return
*/

/*
  Ember's Feedback:
  - Great job! :D
  - Good use of RegEx
*/
// Alternative Solution
function pigIt(str) {
  // ReGex: matches any consecutive word characters, which excludes punctuation and empty space
  return str.replaceAll(/\w+/g, (match) => match.slice(1) + match[0] + 'ay')
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
