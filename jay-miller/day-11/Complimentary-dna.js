function dnaStrand(dna) {
  // Put dna sequence in an object
  const dnaComplement = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'T'
  }
  // Return dna array and split then map
  return dna.split('').map(element => dnaComplement[element]).join('')
}

/*
  Ember's Feedback:
  - Good job
  - Some minor mistakes in the comments
  - name of the file does not conform to the file naming pattern.
    Attention to detail is very important on the job!
*/
// Alternative Solution
function DNAStrand(dna) {
  let dnaRelationships = new Map([
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C']
  ])
  return Array.prototype.map.call(dna, letter => dnaRelationships.get(letter) ?? '').join('')
}

