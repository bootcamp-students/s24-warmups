/*
Instructions: 
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to 
contain only alphabets (both uppercase and lowercase) and numeric digits. (basically count how many characters are returned more than once and return that number count, specifically how many things are 
present more than once, not the number of times the duplicate is present)
Examples: 
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i' occurs six times
Params: given string of either numbers or letters
Return: integer
Concerns: 
Solution: 

Given Code:
function duplicateCount(text){
  //...
}
*/
// in the regex g = global, i = flag to ignore upper/lowercase

function duplicateCount(text){
    if (text.length === 0) {
      return 0
    }
    for(let i = 0; i < text.length; i++){
        let count = 0;
        for (let j = 0; j < text.length; j++)
            {
                if (text[i] == text[j] && i > j)
                    {
                        break;
                    }
                    if (text[i] == text[j])
                        {
                            count++;
                        }
            } if (count === 0) {
              return 0
            } else if (count === 1) {
              return 0
            }
            else if (count >= 2) {
                console.log(`${text[i]} occurs ${count} times`)
              return count
            } // to this point it returns a console log of things that has something occurring twice or more
    }
}



// let regex = /[A-Z]/gi;
// let matches = text.match(regex)
// console.log(matches)