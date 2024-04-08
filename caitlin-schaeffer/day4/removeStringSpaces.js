/* 
Params: Write a function that removes the spaces from the string, then return the resultant string.
Return: a string with no spaces
Solution: Using the replace() method, by passing a regular expression matching any space as the first argument, and an empty string ('') as the second.
The RegExp object is used for matching text with a pattern. So we are aligning the string with the regex (g) and running it twice, where the empty string removes the spacing.

Original Code: 
function noSpace(x){

}
*/

function noSpace(x){
    let string = x;
    let noSpace = x.replace(/ /g, '');
          return noSpace
  }

