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
    // this will split the dna string into individual letters which are strings
    let newArray = dna.split('')
    console.log('newArray:', newArray)
    // this does return all of the letters individually

// write an if/else statement 
   const changeLetter = (inputString) => {
     console.log(inputString)
     if (inputString ==='A') {
        return 'T'
    } else if (inputString ==='T') {
        return 'A'
    } else if (inputString ==='C') {
        return 'G'
    } else if (inputString ==='G') {
        return 'C'
    }
  
}   
    // now put all of the letters together
 const newDNA = newArray.map(dna => changeLetter(dna))
 console.log(newDNA)
  return newDNA.join('')

  }