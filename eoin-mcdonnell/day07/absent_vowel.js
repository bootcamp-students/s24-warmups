function absentVowel(x){
    let vowels = 'aeiou'
     for (var i in vowels) {
       if (x.indexOf(vowels[i]) == -1) {
         return Number(i);
       }
     }
   }
   // get index of array against the string
   //loops through vowels instead of string so we can get value of the item in the 
   // a string is more or less an array in js
   // 