/* precept
parameters- take a string and and reverse words that are 5 or more letters long
return- same string with words 5 or longer reversed
example- "Hey fellow warriors"  --> "Hey wollef sroirraw"
concerns- not sure what method to use. for loop maybe map
explain- split the string into an array of words. loop over the array. if the length of the
current word is = or greater than 5 we split the word into letters, reverse them, then join
them back together. After the words have been looped over and possibly reversed we join it
the words back together and return the result.
positive self talk- "Embrace your journey, celebrate your growth, and believe in your potential." chatGPT haha
translate-
*/

function spinWords(string){
    let splitString = string.split(' ');
    //console.log(splitString);
    
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i].length >= 5){
        splitString[i] = splitString[i].split('').reverse().join('');
        //console.log(splitString);
      }}
      let joinString = splitString.join(' ');
      //console.log(joinString);
      return joinString;
    }