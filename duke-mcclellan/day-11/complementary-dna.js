//parameters - loop
// return value - string 
//example - if statement
//concerns - wrong method
//explain - a solution could be to say if "G" is present then return "C"
//positive self-talk
//translate

function dnaStrand(dna){
  
  let letters = dna.split('');
  
  return letters.map(letter => {
    
  
    
  if (letter === "A"){
    return "T";
  }
  
  if (letter === "G"){
    return "C";
  }
  
  
  if (letter === "T"){
    return "A";
  }
    
  
  if (letter === "C"){
      return "G";
  }
  }).join('')

  console.log(answer)
  }
