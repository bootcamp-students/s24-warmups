var makeEveryLetterAfterXCaps = function (str, letter) {
  //takes a sentence and a letter, both strings
  //returns the sentence with all letters after the given letter as all caps
  //can fail if either var is the wrong type
  
  //guard
  if (typeof str != "string" || typeof letter != "string") {
    //fail, return empty
    return ""
  }
  
  //to solve, first break the string into an array
  let arr = str.split("")
  let index = arr.indexOf(letter)
  
  //guard, check if the letter isn't there
  if (index == -1) {
    return str //return sentence as-is
  }
  
  let capsNext = true //track if the next letter is to be capitalized between loops
  
  //loop over the array, tracking the given letter to capitalize letters after
  for (let i = index + 1; i < arr.length; i++) {
    if (capsNext) { //capitalize the current letter
      arr[i] = arr[i].toUpperCase()
      capsNext = false
    }
    
    if (arr[i] == letter) { //capitalize the next letter
      capsNext = true
    }
  }
  
  //after looping, recombine the array
  str = arr.join("")
    
  //and return
  return str
}
