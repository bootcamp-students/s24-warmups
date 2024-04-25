function spinWords(string) {
  const words = string.split(' ');
  console.log('words', words);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  return words.join(' ');
}

    
    

//       words[i].split('').reverse().join('');
  
//   const bigWord = string.filter((spinWord) => spinWord.length >= 5);
// //     console.log(bigWord);
//   function reverse(string)

//   return string.split('').reverse().join('');
  

//   let spinWords = [' ']
//   const str = spinWords.split(' ');
//   const bigWords = .filter((spinWords) => string.length >= 4)
//   console.log(bigWords);
//   console.log('string', string);
//   const spinWords = spinWord.filter(())




//P create a function that creates a function that takes a string with 5 or mords and reverses that string. 
//R my function should return a function that only reverses a string with 5 or more letters
//Example ("Welcome"), "emocleW"
//"Hey fellow warriors"), "Hey wollef sroirraw"
//C a concern could be that there are no words with more than 5 letters in it. 
//Explain i will split the string to seperate each one. see if the length of words are greater than or equal to 5
// an use the reverse method to check for if the word is greater than or equal to 5 letters
// and finish by joining the strings back together.
