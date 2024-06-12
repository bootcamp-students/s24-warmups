decodeMorse = function (morseCode) {
  let splitCode = morseCode.trim().split('   ');
  let finalArray = [];

  for (let word of splitCode) {
    let letters = word.split(' ');
    let wordArray = [];
    for (let letter of letters) {
      wordArray.push(MORSE_CODE[letter]);
    }
    finalArray.push(wordArray.join(''));
  }
  return finalArray.join(' ');
};
  //