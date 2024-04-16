function dnaStrand(dna){
  const dnaArray = dna.split("")
  
  return dnaArray.map(letter => {
    if (letter === 'A'){
     return 'T'
    }
    else if (letter === 'T'){
      return 'A'
    }
    else if (letter === 'C'){
      return 'G'
    }
    else if (letter === 'G'){
      return 'C'
    }
  })
  .join('')
  
}

/*
i want to take a string, break it apart into letters.
flip each letter to its pair letter
join it together into a single string again.
then return it.

*/
