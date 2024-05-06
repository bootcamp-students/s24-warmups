//morse code
//return string from morse code
//('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
//felt really stuck on this one.  
//Didn't really know where to start but got some help.
//I want to split the morse code into individual characters
//and iterate over the characters into english and join the string together.


decodeMorse = function(morseCode){
  
      const morseCodeWords = morseCode.trim().split('   '); 
    
      
      const decodedWords = morseCodeWords.map(word => {
          const chars = word.split(' '); 
          return chars.map(char => MORSE_CODE[char]).join('');
        
      });
      
      const decodedMessage = decodedWords.join(' ');
      
      return decodedMessage;
}
