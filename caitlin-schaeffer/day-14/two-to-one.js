/*
Instructions: Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters - each
taken only once - coming from s1 or s2.

Params: given two strings

Return: one string

Example: a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
OR:
Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")

Solution: Add the strings together, sort the new string to take out repeated letters, return the newest string

Given Code:
function longest(s1, s2) {
  // your code
}
*/


function longest(s1, s2) {
  //Create arrays from input
  let string1 = [... new Set(s1.split(""))];
  let string2 = [... new Set(s2.split(""))];

  //combine both arrays into one big array
  for (let i = 0; i < string2.length; i++) {
    string1.push(string2[i]);
  }
  //create a unique array from the combination
  let init_combo = [... new Set(string1)];
  //sort the new array and join to form a string
  let combo = init_combo.sort().join("");
  //Return the final result
  return combo;
}
/*
  Ember's Feedback:
  - Good job!
  - You are dong more operations than you need to.
    You can concat the strings and then make a Set from the combined values.
*/
// Alternative Solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
