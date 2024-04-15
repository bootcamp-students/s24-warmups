'use strict'
function dnaStrand(dna){
  let complement = [];
  for ( let i=0; i<dna.length; i++) {
      switch (dna[i]) {
          case 'A':
            complement += 'T';
            break;
          case 'C':
            complement += 'G';
            break;
          case 'G':
            complement += 'C';
            break;
          case 'T':
            complement += 'A';
      }
      }
  return complement
}

//iterate over dna string to populate another string with corresponding letters