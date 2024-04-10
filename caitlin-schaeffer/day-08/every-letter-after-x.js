/*
Params: Imagine a book author has hired us to create a function that takes his book as a string as input 
and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the 
letters after 'x' into a capital letter.
For example:
makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')
Should return:
"and lArry walKed into the park lAte to chase a squirrel"
If the letter after x is already in caps it should stay in caps. Note that the swapping occurs 
considering the modified string, so makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
Return: string
Solution: 

Given Code:
var makeEveryLetterAfterXCaps = function (str, letter) {
// enter solution here



}
*/

/*
Initial ideas: Need to ascertain how JavaScript reads capital letters, then just make a function that 
idenitifes the capital, then makes it lowercase, then capitalizes the next letter and concates everything?
*/


var makeEveryLetterAfterXCaps = function (str, letter) {
    let str = [""];
    let letter = [""];
 // introduce something to search for capital letters
    const letterIsUpper = (str) => {
        for (let i= 0; i < str.length; i++) {
            // this identifies that the string does not have a capital letter
            if (str[i] !== str[i].toUpperCase()) {
                return false; //will return false (no capitals)
            } else if (str[i] === str[i].toUpperCase()) {
                // now write a function to change the letter after the identified letter to capital
            }
        }
    }   
    
    }