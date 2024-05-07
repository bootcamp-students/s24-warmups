function pigIt(str) {
  let splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    if (/^[a-zA-Z]+$/.test(splitStr[i])) {
      let letters = splitStr[i].split('');
      console.log('letters', letters);
      console.log(letters.length);
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
