function dnaStrand(dna) {
  const dnaArray = dna.split("")

  return dnaArray.map(letter => {
    if (letter === 'A') {
      return 'T'
    }
    else if (letter === 'T') {
      return 'A'
    }
    else if (letter === 'C') {
      return 'G'
    }
    else if (letter === 'G') {
      return 'C'
    }
  })
    .join('')

}

/*
i want to take a string, break it apart into letters.
flip each letter to its pair letter
join it together into a single string again.
then return it.
*/
/*
  Ember's Feedback:
  - Great job :D
  - Look at that good good array method
*/
// Alternative Solution
function dnaStrand(dna) {
  let dnaPairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  return dna.split('').map(letter => dnaPairs[letter]).join('');
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
