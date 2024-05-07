function pigIt(str){
  //function takes a string and needs to convert it to pig latin and return
  //this is done by moving the first letter of each word to the end, and then adding "ay"
  
  //to solve, first make a function to convert individual words as arrays
  function word(string) {
    //guard against punctuation
    if (string === "!" || string === "?" || string === ".") {
      return string
    }
    
    //convert to an array and reverse it
    let array = string.split("").reverse()
    //pop the first letter, then reverse again and push it
    let letter = array.pop()
    array.reverse().push(letter)
    //join and add "ay"
    string = array.join("") + "ay"
    return string //return
  }
  
  //now split the string by word (spaces) and iterate over
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = word(words[i])
  }
  
  //join it when we're done
  return words.join(" ")
}
