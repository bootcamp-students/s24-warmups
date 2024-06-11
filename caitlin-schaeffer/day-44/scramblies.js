/*
Instructions: Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be 
rearranged to match str2, otherwise returns false.
Notes:
-Only lower case letters will be used (a-z). No punctuation or digits will be included.
-Performance needs to be considered.
Example:  
-scramble('rkqodlw', 'world') ==> True
-scramble('cedewaraaossoqqyt', 'codewars') ==> True
-scramble('katas', 'steak') ==> False
Params: given two strings
Return: true/false
Concerns: 
Solutions: 
Given Code: 
function scramble(str1, str2) {
  return false;
}

Pseudo Code:
Check if all of the letters of the second string are present in the first string
I really want to say something like:
for char in sorted 1
sorted2.includes(char)

then

if sorted2 includes all char of sorted1
return true 
*/
//.every is an array method that takes a callback function (testing functions mean you're doing a check and returning a boolean)

//the large test passes but the little test doesn't
function scramble(str1, str2) {
  let sorted1 = str1.split("");
  let sorted2 = str2.split("");
  let answer = sorted2.every((element) => {
    return sorted1.includes(element);
  });
  return answer;
}

/*
  Ember's Feedback:
  - This isn't working
  - The issue here is we want to check if the given letter in str2 appears >= the number of times in str1 as it did in str2.
    As written, it stops at the first occurrence of th letter and returns true.
*/

/*
old:

function scramble(str1, str2) {
    sorted1 = str1.split("").sort()
    console.log('SORT1: ', sorted1)
    sorted2 = str2.split("").sort()
    console.log('SORT2: ', sorted2)
    answer = sorted2.every((element) => sorted1.includes(element))
    console.log('ANSWER: ', answer)
    return answer
  }


function scramble(str1, str2) {
    sorted1 = str1.split("").sort().join("")
    console.log('SORT1: ', sorted1)
    sorted2 = str2.split("").sort().join("")
    console.log('SORT2: ', sorted2)
    answer = sorted2.includes(sorted1)
    console.log('ANSWER: ', answer)
    return answer
  }
*/
