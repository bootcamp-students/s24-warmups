//string
//string with one or more words reversed
//split the string, reverse then join.
//syntax issues
//I need to split the word in a string and reverse that word if it is greater
//or equal to five characters.  Loop over each word split/reverse/join those words
//but allow less than five to print as normal. 

function spinWords(string){
  let words = string.split(' ');
  for(let i = 0; i < words.length; i++){
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  return words.join(' ');
}


