// parameters - loop
// parameter - dna: string (a string of capital letters representing half a molecule of DNA)
// return value - string (a string of opposite capital letters representing the other half of the dna molecule)
// example - if statement
// example - ('AAATGC') => 'TTTACG'
// concerns - wrong method
// explain - a solution could be to say if "G" is present then return "C"
// explain - I will iterate over the string to isolate each letter. I will create a new string that contains
//  the opposite letter values of the input, in the same order as the input string. I will return the new string.
// positive self-talk
// translate

function dnaStrand(dna) {

  let letters = dna.split('');

  return letters.map(letter => {

    if (letter === "A") {
      return "T";
    }

    if (letter === "G") {
      return "C";
    }

    if (letter === "T") {
      return "A";
    }

    if (letter === "C") {
      return "G";
    }
  }).join('')

}

/*
  Ember's Feedback:
  - Great job :D
  - Look at that good good array method
  - Great job using PRECEPT :)
*/
// Alternative Solution
function dnaStrand(dna) {
  let dnaOpposites = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  return dna.split('').map(letter => dnaOpposites[letter]).join('');
}

function DNAStrand(dna) {
  let dnaRelationships = new Map([
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C']
  ])
  return Array.prototype.map.call(dna, letter => dnaRelationships.get(letter) ?? '').join('')
}
// because strings are "array like" you can call array methods on them in this
// way using .call
