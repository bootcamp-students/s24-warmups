//parameters- 
//should return a string using camel case 
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//capitalizing every word instead of camel case due to wrong method
//I want to be able to take every string regardless of their format 
//and split them map over each word/index and join them back 
//together and camel case every word after the first one.


function toCamelCase(str){
  return str
    .split(/[-_]/) //removing dashes and underscore
    .map((word, index) => { //map over each word and index 
      if (index === 0) {
        return word;  //if the index is 0 word is to be left alone
      }
      return (
      word.charAt(0).toUpperCase() + word.slice(1) //also want to return a word character at index 0 to be uppercased and to return the extracted part of the string
        );
  })
  .join('') //finally join the string back together. 
}
