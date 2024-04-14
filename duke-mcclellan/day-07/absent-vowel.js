//return a vowel (index)
// Loop to cycle through index values of the array


function absentVowel(inputString){
let vowels = "aeiou";
  
  for (let i in vowels) {
    if(inputString.indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}
