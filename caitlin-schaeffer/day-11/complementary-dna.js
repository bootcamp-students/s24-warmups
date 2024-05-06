/*
Instructions: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
Your function receives one side of the DNA (string, except for Haskell); you need to return the
other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Params: given string
Return: string
Solution: split the original string, write an if/else statement to return the paired letter,
map the result of the if/else statement

Given Code:
function dnaStrand(dna){
  return ""
}
*/

function dnaStrand(dna) {
  // this will split the dna string into individual letters which are strings
  let newArray = dna.split('')
  // this does return all of the letters individually

  // write an if/else statement
  const changeLetter = (inputString) => {
    if (inputString === 'A') {
      return 'T'
    } else if (inputString === 'T') {
      return 'A'
    } else if (inputString === 'C') {
      return 'G'
    } else if (inputString === 'G') {
      return 'C'
    }

  }
  // now put all of the letters together
  const newDNA = newArray.map(dna => changeLetter(dna))
  return newDNA.join('')
}

/*
Good code I saw after submission:
function DNAStrand(dna) {
return dna.replace(/./g, function(c) {
  return DNAStrand.pairs[c]
})
}

DNAStrand.pairs = {
A: 'T',
T: 'A',
C: 'G',
G: 'C',
}
*/

/*
  Ember's Feedback:
  - Great job :D
  - because you are just passing the string directly to changeLetter, you could
    write it like this instead and it would be the same thing .map(changeLetter)
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
