/*-
porecepts 
only lower case letters, no punctuation or digits

if part of str1 can be rearranged to match str2 
true else false 

foreach 
concerns?

pseudocode
split str 1 and str 2 into two arrry arr1 and arr2
for each item in arr1 if a letter is not in arr2 
everything is false
or would map be bettwe for iterating? 
would we need to so

we  need to handle for multiple of the same letter so
if there are two of the same letter in arr1
we need two of the same letter in arr2
indexof for the fist oocurace of a letter
-*/


// function scramble(str1, str2) {
//   let arr1 = str1.split('')
//   let arr2 = str2.split('')
//   let checker = (arr, target) => target.every(v => arr.includes(v));
//   if (checker(arr1, arr2) === true){
//     arr1.foreach()
//   }
//   console.log(checker(arr1, arr2))
//   return checker(arr1, arr2);
// }

function scramble(str1, str2) {
    if (str2.length > str1.length) return false;
    const counts = {};
    for (let c of str1) {
      counts[c] = (counts[c] || 0) + 1
    }
    for (let c of str2) {
      if (!counts[c]) return false;
      counts[c]--;
    }
    return true;
  }