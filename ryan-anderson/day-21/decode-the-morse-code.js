decodeMorse = function(morseCode){
    let output = ('')
    let newStr = morseCode.trim(' ').split(' ').filter((char, i) => char[i+1] !== ' ');
      console.log(newStr)
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] !== '') {
        output += MORSE_CODE[newStr[i]]
      } else if (newStr[i] === '' && newStr[i-1] !== '') {
        output += ' '
      }
    }
      return output
      }
    
    // map over string, replacing morse code with equivalent letter/space