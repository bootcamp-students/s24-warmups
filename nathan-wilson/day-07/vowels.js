/* precept
parameters- find the missing vowel from a given string.
return- return the associated number of the missing vowel
example- "John Doe hs seven red pples under his bsket" =>  0  ; missing: "a"
concerns- no idea how to figure this out in code but im sure ill get there. Maybe array?
explain- see below
positive self talk- ive figured them all out so far im sure ill figure this one out too.
translate- find the index of the vowels and subtract 1
*/

function absentVowel(x){
    // store vowels in variable
  let vowels = 'aeiou';
// loop through the vowels 
// find the index of the vowels and subtract 1. 
// this will find the zero indexed number.
// return that number.
for (let i in vowels) {
  if (x.indexOf(vowels[i]) == -1) {
    return Number(i);
  }
}
}