/* precept
parameters- find shortest word in a string
return- a number that equals the shortest words length
example- bitcoin take over shortest word = 4
concerns - finding the shortest string and returning a number
explain- start by defining s into words with split and a space so its goes by words instead
of each letter. length of word = the length of the first word.

positive self talk- Can do
translate-
*/

function findShort(s){
    let words = s.split(' ');// split string into an array or words with split(' ') must use space
    let lengthOfWords = words[0].length; // lengthOfWord = length of first word
    
    
    for (let i = 0; i < words.length; i++) { // loop through each word in array
      
      if (words[i].length < lengthOfWords) { // check if current word is shorter than lengthOfWord
        lengthOfWords = words[i].length // if yes update lengthOfWord with current word
      }
      
    }
    return lengthOfWords; // return length of word with the number of the shortest word found.
  }