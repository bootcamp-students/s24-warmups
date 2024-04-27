function findShort(s){
  console.log('s',s);
  const words = s.split(' ');
  console.log('words', words);
  let shortestWord = words.reduce((acc, cur) => {
    return cur.length < acc.length ? cur : acc;
  });
  return shortestWord.length; 
 
}


//P find the shorest word
// R my function should return the shortest word.
//Example ['I eat bananas'], 1;
//Concerns use the wrong function and confuse the computer 
//Explain, I will split the entire string to break up every word. and then reduce the string, iterating over each word
//using acc and cur as values. if the current value is less than acc then it tracks that length of the word until it reaches the end of the string. 


// function findShort(s){
//   console.log('s', s);
//   const words = s.split(' ')
//   console.log('words', words);
//   const shortestWord = words.reduce((acc, cur) => {
//     console.log('acc, cur', acc, cur)
//     return acc < cur.length ? acc : cur.length
//   }, 30000)
//     console.log('shortestWord: ', shortestWord);
//   return shortestWord
// } 

//P find a function that finds the shortest word in a string.
//R my function should include the shortest word.
//Example- (['I eat bananas'], 1)
// Concerns - I could get confused on which function to use. 
//Explain- I'm going to split the string so that I can seperate each word. I will set the initial value to a big number so that I can pass the reduce method
// into the first string of the array. Using the accumulator and then passing onto the current word to see which of the two are the shortest word and working 
// its way through the entire string. 
