
/*
P-str, array, regExp, firstLetter, restWord, concatStr, fullPig
R- mapArr

split string into array by (" ")
map through array (x) (mapArr)
    if contains letter
        then slice - firstLetter
        slice - restWord
        concat both of them
        add ay
join mapArr

*/

function pigIt(str) {
  let regExp = /^[a-zA-Z]+$/

  let arr = str.split(" ");
  let mapArr = arr.map((x) => {
    if (regExp.test(x)) {
      let firstLetter = x.slice(0, 1);
      let restWord = x.slice(1, (x.length));
      let concatStr = restWord.concat(firstLetter);
      let fullPig = concatStr + "ay";
      return fullPig;
    }
    return x;
  })
  return mapArr.join(" ")
}

/*
  Ember's Feedback:
  - Great job! Good use of RegEx :D
  - In precept, the Parameter is really meant for you to know the type of the parameter.
    In this case, it is one param named str of type String, which lets you know -
    that you can use string methods. It also helps you to write guard clauses so that
    you can protect your code from incorrect input.
  - The Return portion is meant to help you track what the return type must be.
    For this problem the return needs to be a string.
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
