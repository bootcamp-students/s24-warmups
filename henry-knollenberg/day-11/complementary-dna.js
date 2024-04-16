/* Parameters - dna, char, newString
  Return - newString
  newString = replace A w/T
              replace T w/A
              replace C w/G
              replace G w/C
  return newString
*/

function dnaStrand(dna){
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