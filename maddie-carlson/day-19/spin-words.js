function spinWords(string){
  //function takes a string
  //needs to return a string but with all words five letters or longer reversed
  
  //to solve, first split the string into an array by spaces
  let array = string.split(" ")
  
  //then loop over the array, checking if any entry is longer than five letters
  //if it is, split THAT element into an array, reverse() and join() it, then replace the original
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      let str_arr = array[i].split("")
      str_arr.reverse()
      array[i] = str_arr.join("")
    }
  }
  
  //once we're done, join the array by spaces and return
  return array.join(" ")
}
