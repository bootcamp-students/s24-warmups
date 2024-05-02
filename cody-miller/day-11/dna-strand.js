function dnaStrand(dna) {
  let dnaSequence = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        dnaSequence += "T";
        break;
      case "T":
        dnaSequence += "A";
        break;
      case "C":
        dnaSequence += "G";
        break;
      case "G":
        dnaSequence += "C";
        break;
    }
  }

  return dnaSequence;
}

/*
Because they are compliments to one another, there really is just a binary choice.
If "A", then T; if "T" then "A".
If "C", then "G"; if "G", then "C".
*/

/*
  Ember's Feedback:
  - Great job :D
  - I like what you did with the switch case! You could do a similar thing with an object
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
