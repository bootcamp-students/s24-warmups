/*
Instructions: Write a function that takes in a string of one or more words, and returns the same string, but with all words 
that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present.
Example: "Hey fellow warriors"  --> "Hey wollef sroirraw" ; "This is a test   --> "This is a test" 
Params: given a string
Return: a string
Solution: split the string into an array of words, map each word to check if it's length is 5 or >, reverse if so, return a new array joined back together.

Given Code:
function spinWords(string){
  //TODO Have fun :)
}
*/

function spinWords(string){
    let newWords = string.split(" ")
    console.log(newWords)
  
    
    let reverseWords = newWords.map((words) => {
        if (words.length >= 5) {
          return words.split("").reverse().join("")
        } 
        return words
        
      })
        return reverseWords.join(" ")
  
  }

