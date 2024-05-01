/* Parameters - dna, char, newString
  Return - newString
  newString = replace A w/T
              replace T w/A
              replace C w/G
              replace G w/C
  return newString
*/

function dnaStrand(dna) {
  let newString = "";
  for (let char of dna) {
    switch (char) {
      case "T":
        newString += "A";
        break;
      case "A":
        newString += "T";
        break;
      case "C":
        newString += "G";
        break;
      case "G":
        newString += "C";
        break;
    }
  }
  return newString;
}
/*
  Ember's Feedback:
  - Great job!
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
