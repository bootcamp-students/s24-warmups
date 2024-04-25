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
