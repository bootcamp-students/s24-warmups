'use strict'
function dnaStrand(dna) {
  let complement = [];
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        complement += 'T';
        break;
      case 'C':
        complement += 'G';
        break;
      case 'G':
        complement += 'C';
        break;
      case 'T':
        complement += 'A';
    }
  }
  return complement
}

//iterate over dna string to populate another string with corresponding letters
/*
  Ember's Feedback:
  - Good use of the switch case!
  - You have "compliment" initialized as an array, it would be better to initialize it
    as an empty string to communicate that it will ultimately be a string.
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
