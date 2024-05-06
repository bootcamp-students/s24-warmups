function maskify(cc) {
  //function takes a string
  //returns another string with all characters save the last four turned into #
  
  //to solve, first create a new holder array
  let mask = []
  
  //then check the length of the provided string
  if (cc.length > 4) {
    //form the original string into an array and reverse it
    let array = cc.split("").reverse()
    
    for (let i = 0; i < array.length; i++) {
      if (i < 4) {
        mask.push(array[i]) //untouched
      } else {
        mask.push("#") //mask
      }
    }
    
    //return our masked string, reversed and joined
    return mask.reverse().join("")
  } else {
    return cc //too short, return as-is
  }
}
