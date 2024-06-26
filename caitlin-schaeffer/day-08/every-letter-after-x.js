/*
Instructions: Imagine a book author has hired us to create a function that takes his book as a string as input
and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the
letters after 'x' into a capital letter.
For example:
makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')
Should return:
"and lArry walKed into the park lAte to chase a squirrel"
If the letter after x is already in caps it should stay in caps. Note that the swapping occurs
considering the modified string, so makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
Params: string, and a letter
Return: string

Solution:

Given Code:
var makeEveryLetterAfterXCaps = function (str, letter) {

}

Clarify: I misunderstood:
str = the string
letter = the letter in the string that they want the letter after to be capitalized
so if
(makeEveryLetterAfterXCaps('bac', 'a'), it will return 'baC'
*/

/* Ideas:
write a function that identifies letter as a variable, then identify str as a variable with an empty ''
then
*/

var makeEveryLetterAfterXCaps = function (str, letter) {
    let answer = ''
    let nextCapital = false;
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (nextCapital) {
            currentChar = currentChar.toUpperCase();
        }
        nextCapital = currentChar === letter;
        answer += currentChar;
    }
    return answer

}

/*
  Ember's Feedback:
  - Good job!
*/
// Alternative solution
var makeEveryLetterAfterXCaps = function (str, letter) {
    let modifiedString = "";
    let capitalizeNext = false;
    for (let i = 0; i < str.length; i++) {
        let sub = str.at(i);
        if (capitalizeNext) {
            sub = sub.toUpperCase()
        }
        capitalizeNext = sub === letter
        modifiedString = modifiedString + sub
    }
    return modifiedString;
}


/* Broken code:

This is form when I thought we had to identify all capital letters in a string, convert them to lowercase
and then capitalize the next letter:
var makeEveryLetterAfterXCaps = function (str, letter) {
let str = [""];
let letter = [""];
let answer = '';
// introduce something to search for capital letters
const letterIsUpper = (str) => {
    for (let i= 0; i < str.length; i++) {
        // this identifies that the string does not have a capital letter
        if (str[i] !== str[i].toUpperCase()) {
            return false; //will return false (no capitals)
        } else if (str[i] === str[i].toUpperCase()) {
            // now write a function to change the letter after the identified letter to capital
            // could i just call the function here and then write it below?
        }
    }
}

}
*/
