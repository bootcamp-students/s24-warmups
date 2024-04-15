function dnaStrand(dna){
  let dnaSequence = "";
  for (let i = 0; i < dna.length; i++){
  switch (dna[i]) {
    case "A":
    dnaSequence += "T";
      break;
    case "T":
    dnaSequence += "A";
      break;
    case "C":
    dnaSequence += "G";
      break;
    case "G":
    dnaSequence += "C";
      break;
    } 
  } return dnaSequence;
} 

/*
Because they are compliments to one another, there really is just a binary choice.
If "A", then T; if "T" then "A".
If "C", then "G"; if "G", then "C".
*/