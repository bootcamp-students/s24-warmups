function dnaStrand(dna) {
  let dnaLetters = dna.split('');
  return dnaLetters
    .map((letter) => {
      if (letter === 'A') {
        return 'T';
      }
      if (letter === 'T') {
        return 'A';
      }
      if (letter === 'G') {
        return 'C';
      }
      if (letter === 'C') {
        return 'G';
      }
    })
    .join('');
}

// 1 parameter that is a string of capital letters,
// it will only contain A G T or C

// Its expecting me to return a string with each letters complimentary character,
// A and T are complimentary and G and C

// "ACAC" returns "TGTG"

// I could not split the array correctly, I could return the wrong complimentary character

// Split the string into an array of all the letters.
// loop through it and for each letter add its complimentary
// letter to a new array. Join and return that final array

// I just need to take it slow. Im 100% sure I can do this.
