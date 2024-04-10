//do i turn the string into an array
// find letter after 'letter' so string 
// find the letter in the string index 
//isolate leter after "letter"
//runn toUpperCase
//isolate letter in string

var makeEveryLetterAfterXCaps = function (str, letter) {
    // enter solution here
      let arr = str.split("")
    
      for (let char in arr){
        if (arr[char] === letter && Number(char) < arr.length -1){
          arr[Number(char) + 1] = arr[Number(char) + 1].toUpperCase()
        }
      }
      return arr.join("")
    }
    /*-
    
    
    var makeEveryLetterAfterXCaps = function (str, letter) {
      let newStr = ''
      for (let char in str){
        newStr.toUpperCase(newStr[char + 1])
        return newStr
      }  
    }
    
    
    -*/