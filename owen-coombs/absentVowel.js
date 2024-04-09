function absentVowel(inputString){
  
  let vowles = "aeiou";
  
  for(let i in vowles){
    if(inputString.indexOf(vowles[i]) == -1) {
      return Number(i);
    }
  }
}
  
// create var for vowles
// create for loop if the vowel = -1 return number(i)
