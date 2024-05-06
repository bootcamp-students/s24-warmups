function duplicateCount(text){
  //function takes a string
  //needs to return the count of case-insensitive characters that occur more than once
  //it can't count the same character multiple times!
  
  //to solve, first split the string into an array
  let array = text.split("")
  
  //then create a reference array to store previously seen characters
  //an array of already-counted duplicates
  //and a count
  let ref = []
  let dupes = []
  let count = 0
  
  //then, iterate over the array, storing any unique characters and counting any duplicates
  for (let i = 0; i < array.length; i++) {
    let element = array[i].toUpperCase() //case insensitive!
        
    if (ref.includes(element)) { //in ref
      if (!dupes.includes(element)) { //not already counted
        dupes.push(element)
        count += 1
      }
      continue
    } else { //not in ref
      ref.push(element)
      continue
    }
  }
  
  //return count
  return count
}
