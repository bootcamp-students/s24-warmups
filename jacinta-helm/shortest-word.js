
function findShort(s){
  console.log('s', s);
  const words = s.split(' ')
  console.log('words', words);
  const shortestWord = words.reduce((acc, cur) => {
    console.log('acc, cur', acc, cur)
    return acc < cur.length ? acc : cur.length
  }, 30000)
    console.log('shortestWord: ', shortestWord);
  return shortestWord
} 

//P find a function that finds the shortest word in a string.
//R my function should include the shortest word.
//Example- (['I eat bananas'], 1)
// Concerns - I could get confused on which function to use. 
//Explain- I'm going to split the string so that I can seperate each word. I will set the initial value to a big number so that I can pass the reduce method
// into the first string of the array. Using the accumulator and then passing onto the current word to see which of the two are the shortest word and working 
// its way through the entire string. 
