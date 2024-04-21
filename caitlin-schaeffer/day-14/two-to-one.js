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
    // your code
    //Create Arrays a and b containing unique values by making them Set and converting them back to array.
    let string1 = [... new Set(s1.split(""))];
    let string2 = [... new Set(s2.split(""))];
  
    //combine both arrays into one
    for (let i=0; i<string2.length; i++){
        string1.push(string2[i]);
    }
    //create a unique array from the combination
    let init_combo = [... new Set(string1)];
    //sort array and join to form a string
    let combo = init_combo.sort().join("");
    //Return the final result
    return combo;
  
  }
