// replace one letter with another
// use a find function

function DNAStrand(dna) {
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    }
    else if (dna[i] === "T") {
      result += "A";
    }
    else if (dna[i] === "C") {
      result += "G";
    }
    else if (dna[i] === "G") {
      result += "C";
    }
    else {
      result += dna[i];
    }
  }
  return result;
}
/*
  Ember's Feedback:
  - Great job!
  - Because strings are immutable in JS, you built up a new string
    letter by letter :)
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

