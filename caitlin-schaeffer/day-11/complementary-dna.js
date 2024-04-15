/*
Instructions: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the
other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Params: given string
Return: string
Solution: 

Given Code: 
function dnaStrand(dna){
  return ""
}
*/


function dnaStrand(dna){
    // this will split the dna string into individual letters 
    let newArray = dna.split('')
// write an if/else statement 
    let newDNA(newArray) {
    if ('a') {
        return 't'
    } else if ('t') {
        return 'a'
    } else if ('c') {
        return 'g'
    } else if ('g') {
        return 'c'
    }
}
    // now put all of the letters together
    return newDNA.concat()

  }