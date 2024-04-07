/*
Params: Write a function that removes the spaces from the string, then return the resultant string.
Return: a string with no spaces
Solution: Using the replace() method, by passing a regular expression matching any space as the first argument, and an empty string ('') as the second.
The RegExp object is used for matching text with a pattern. So we are aligning the string with the regex (g) and running it twice, where the empty string removes the spacing.
*/

function noSpace(x) {
    let noSpace = x.replace(/ /g, '');
    return noSpace
}

/* Ember's Feedback:
  Please clean these up before you submit.
  Good use of a Regular Expression, they can be very powerful!
  Let me know if you have questions about RegEx.
*/
