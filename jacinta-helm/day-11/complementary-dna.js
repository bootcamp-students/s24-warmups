function dnaStrand(dna) {
  let compDna = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    result += compDna[dna[i]] || dna[i]; //so if the letter pair is not found, use the original letter pair.
  }

  return result;
}
//P create a function that shows the pair to the DNA strand.
//R my function should show the pair to the other letter that it is paired with.
//Example ("AAAA"), "TTTT"
//Concerns I could get confused on how to create pairs. Or there could be no pairs in the function.
//Explain i can create object literals with key value pairs. A:T, T:A, C:G, G:C.
// I need iterate over the letters in the string and have each letter pair with one another to build the Dna string.
/*
  Ember's Feedback:
  - Great job! :D
  - Really excellent work using an object to store the pairs
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
