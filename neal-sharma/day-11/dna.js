/* precept
parameters- change dna from one side to the other side of dna complimentary letters
return - complimentary letters from the given string.
example- aaaa returns tttt
concerns- just gonna use an if or switch i believe. ill have concerns as i go through.
had some syntax issues mostly. forgot to put a curly bracket after an if statement that messed me
up for a minute. the lesson jason gave over methods helped a lot.
explain- if statement that changes each letter into its complimentary letter.
positive self talk- be like water my friend
translate- comments
*/

function dnaStrand(dna) {
  let dLetters = dna.split(''); // split string into an array of letters.
  return dLetters.map((letter) => { //use math method to iterate over each letter in array
    // and change it to the new letter
    if (letter === 'A') { // if letter = a change it to t
      return 'T';
    }
    if (letter === 'T') { // if letter = t change it to a
      return 'A';
    }
    if (letter === 'C') { // if letter = c change it to g
      return 'G';
    }
    if (letter === 'G') { // if letter = g change it to c
      return 'C';
    }
  })
    .join(''); // join the changed array back into a single string
}
/*
  Ember's Feedback:
  - Great work!
  - Great pseudocode as always
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
