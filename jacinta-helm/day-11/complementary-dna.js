function dnaStrand(dna){
//   let dna1 = "ATTGC";
//   let dna2 = "TAACG"; 
  let compDna = {
    'A': 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
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
