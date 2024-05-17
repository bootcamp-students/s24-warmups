function dnaStrand(dna) {
    const complement = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    const complementaryStrand = [...dna].map(base => complement[base]).join('');
    return complementaryStrand;
}
// use .map
// Use map to replace each base
// Return the completed complementary sequence
/*
    Ember's Feedback:
    - Good job! Storing the pairs in an object is a great idea.
    - this is in the wrong day folder, add this to day-11!
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
