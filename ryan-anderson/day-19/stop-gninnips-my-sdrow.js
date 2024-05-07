function spinWords(string) {
  let newArray = string.split(' ')

  let reverseArray = newArray.map(s => {
    let sArray = s.split('')
    if (s.length > 4) {
      return sArray = (sArray.reverse()).join('');
    } else {
      return sArray = sArray.join('');
    }
  })
  return reverseArray.join(' ')
}

//split at spaces
//reverse entries with length > 4

/*
  Ember's Feedback:
  - Good job!
  - You could make this slightly better by not splitting unless the input
    from your map gets inside your if statement.
  - Also the parenthesis on line 7 are ignored
  - Also the assignment to sArray is unneeded if you just immediately return the value
*/
// Alternative Solution
function spinWords(string) {
  let newArray = string.split(' ')

  let reverseArray = newArray.map(s => {
    if (s.length > 4) {
      return s.split('').reverse().join('');
    } else {
      return s
    }
  })

  return reverseArray.join(' ')
}

// using a ternary
function spinWords(string) {
  return string
    .split(' ')
    .map((s) => (s.length < 5) ? s : s.split('').reverse().join(''))
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
