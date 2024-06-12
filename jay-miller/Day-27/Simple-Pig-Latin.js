function pigIt(str){
  //let words = str.split(' ')
  //console.log(str);
  //A list of words
  //Iterate over the words
  //for (let i = 0; i < words.length; i++) {
    //For each word take the first letter
    //let word = words[i];
    //let firstLetter = word[0];
    //Make a new word and then add "ay" to the new string
    //let newWord = word.slice(1) + firstLetter + "ay";
    //words[i] = newWord;
    //console.log(words);
    //return words.join(" ");
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
/*
  Ember's Feedback:
  - Nice RegEx!
*/
// Alternative Solution
function pigIt(str) {
  // ReGex: matches any consecutive word characters, which excludes punctuation and empty space
  return str.replaceAll(/\w+/g, (match) => match.slice(1) + match[0] + 'ay')
}

