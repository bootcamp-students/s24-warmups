function spinWords(string){
  'use strict'
  let wordArray = string.split(' ');
  
  let stringMap = wordArray.map((x) =>{
    if (x.length >= 5) {
      return x.split('').reverse().join('');
    }
    return x
  })
  return stringMap.join(' ')
    
  }

// i want to take the given string and split it into an array so i can manipulate it
// after that ill map the array out and check the length of each word
// if the word length is greater or equal to 5, ill pull that word, reverse it then join
// then join everything together.
