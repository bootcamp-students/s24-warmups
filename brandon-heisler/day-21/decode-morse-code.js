decodeMorse = function(morseCode){
  "use strict"
  let trimCode = morseCode.trim()
  let morseWordsArray = trimCode.split("  ")
  let returnArray = []
  
  for (let i = 0; i < morseWordsArray.length; i++){
    let morseWord =  morseWordsArray[i]
    let morseLetterArray = morseWord.split(" ")
    console.log(morseLetterArray)
    let newArray = morseLetterArray.map((letter) => MORSE_CODE[letter])
    console.log("newarray", newArray)
    returnArray.push(newArray.join(""))
    
  }
  console.log(returnArray)
  return returnArray.join(' ')
  
  
  
  // You can use MORSE_CODE[morse]
}
/*
were given a string in morse code and need to translate it with a provided
library
first i want to take the extra spaces off of the ends of the string
next ill create an array and split the string into morse words. and add an
emptry array to put the answer in next i need to loop over the words and 
change each letter into morse, one letter at a time, plug those back into 
an array after joining them together back into words. then join and return it.
