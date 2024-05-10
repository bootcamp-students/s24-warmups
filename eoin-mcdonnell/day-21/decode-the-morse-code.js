/*
  Ember's Feedback:
  - Also not reading this, no idea why some of this is commented
  - the stuff that isn't commented is incomplete
  - to get the feedback you are paying for you need to give me something I can work with
*/

//more code library loaded
//iterate ovr the message and look for the value in more code library?
// found the way to get moreode to spit out the compliant letter
// dealing with undefinieds
// there is a undefinied before and after each word


/*-
decodeMorse = function(morseCode){
  // Your code here
  let newStr = morseCode.trim(' ').split(' ').filter((char, i) => char[i+1] !== ' ');
  console.log(newText)
  let decodedMessage = "";
  let firstUndefined = true
  for (let i =0; i < morseCode.length; i++){
    if(MORSE_CODE[newText[i]] === undefined){
      if(firstUndefined === true){
        decodedMessage += " "
        firstUndefined === false
      } else {
       decodedMessage += ""
        firstUndefined === true
      }
    } else {
      decodedMessage += MORSE_CODE[newText[i]];
    }
  }
  console.log(decodedMessage)
  return decodeMorse
}
-*/

var phrase = [];
morseCode.trim();
var words = morseCode.split("   ");
for (var i = 0; i < words.length; i++) {
  var letters = words[i].split(" ");
  for (var j = 0; j < letters.length; j++) {
    letters[j] = MORSE_CODE[letters[j]];
  }
  phrase.push(letters.join(""));
}
return phrase.join(" ").trim();
}
