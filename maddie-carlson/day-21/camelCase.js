function toCamelCase(str) {
  //function takes a string and needs to return a string converted to camelCase
  //needs to delete any dashes or underscores
  
  //to solve, create an empty string to start and split the provided string into an array
  let string = ""
  let array = str.split("")
  
  //finally, make a sentinel to determine if a word needs to be capitalized
  let caps = false
  
  //loop over the array string
  for (let i = 0; i < array.length; i++) {
    //check for underscores and dashes
    //if found, ignore them and note that the next word needs to be capitalized
    let letter = array[i]
    
    switch (letter) {
      case "-":
        caps = true
        continue;
      case "_":
        caps = true
        continue;
      default:
        if (caps) { //capitalize this letter
          letter = letter.toUpperCase()
          caps = false
        }
        break;
    }
    
    //add the result to our string
    string = string + letter
  }
  
  //return resulting string
  return string
}
