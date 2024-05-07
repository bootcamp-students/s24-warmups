/*precept
parameters- find the distinct alphabetic characters and numberic digits that occur more than
once.
return- return the amount times the letter is repeated in the string.
example- ("aabbcde"), 2);
concerns- find the right method. need to find the repeating letters and return the length maybe
explain- change all the text to lowercase, split that into an array, filter the array by
repeating characters. The first conditon ensures the char is not the first occurence in the
array.The second condition ensures that the char is the last occurence in the array. combining 
these two conditions ensures we are counting repeating characters but only returning the last
one of the repeating char. Then we return the length of the array. which is the number
of the repeating letters not the number of letters that are repeating. Kinda confusing.
positive self talk-
translate-
*/

function duplicateCount(text){
    let textLower = text.toLowerCase();
    let split = textLower.split('');
    
    let repeating = split.filter ((char, index) => {
      return split.indexOf(char) !== index// finds the repeating char
      && split.lastIndexOf(char) === index;// makes sure we're on the last of the repeating char
    })
    return repeating.length;
  }