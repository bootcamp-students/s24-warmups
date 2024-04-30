function dnaStrand(dna) {
  //function takes a string "dna" that's one half of a DNA string
  //returns a complementary string of the opposite DNA base pairs
  //A complements T and C complements G

  //to solve, start by splitting the string into individual characters
  let array = dna.split("")

  //create an empty array, and then
  let complement = []

  //iterate over the DNA array, pushing an A for each T and a C for each G (and vice versa) to the empty array
  for (let i = 0; i < array.length; i++) {
    let new_letter

    switch (array[i]) {
      case "A":
        new_letter = "T"
        break;
      case "T":
        new_letter = "A"
        break;
      case "C":
        new_letter = "G"
        break;
      default: //assume G
        new_letter = "C"
        break;
    }

    complement.push(new_letter)
  }

  //recombine the empty array with join()
  let complement_string = complement.join("")

  //return the new string
  return complement_string
}
/*
  Ember's Feedback:
  - Good job!
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
