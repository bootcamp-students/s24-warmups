/*
Instructions: 
Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

Example: 
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
Params: given string
Return: string
Solution: I'm going to split all of the individual components up, and then map it using the library, and then join the characters back
together

Given Code: 
use this library: MORSE_CODE['.--']

decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
}
*/

decodeMorse = function(morseCode){
  // first split the string, then map it
  return morseCode.split('   ').map(word => 
    //then join everything back after passing through the library
    word.split(' ').map(char => MORSE_CODE[char]).join('')
  ).join(' ');
};


