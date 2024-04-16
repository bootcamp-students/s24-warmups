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



  /*
s.split splits the string into words so the array is now ['This', 'is', 'Neal'] or whatever the
test string is. .map(s => s.length) maps each element of the array to its length. example [4, 2, 4],
Math.min calculates the minimum value of the elements in the array. spread is needed here because it
makes it so that Math.min checks each number in the array. without the spread it would return
NaN not a number.
This uses Math.min to find 
*/

function findShort(s){
  return Math.min(...s.split(' ').map(s => s.length));
}