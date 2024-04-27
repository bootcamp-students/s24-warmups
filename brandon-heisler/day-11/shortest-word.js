function findShort(s){
  let wordArray = s.split(' ')
  
  let answer = 100

  wordArray.forEach(word => {
   if(answer > word.length){
     answer = word.length
   }
  })
  
  return answer;
}
  /*
  using forEach, i want to compare a large numnber to each word length to 
  find the smallest. id the starting number is greater than the word length
  then adopt the word length as the new answer.
  */
