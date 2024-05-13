function findUniq(arr) {
  // function takes an array and needs to return the unique number in the array
  // to solved, filter the array
  let unique = arr.filter((element, index) => {
    // use indexOf and lastIndexOf to identify if a given element is unique
    //need special cases for the first and last elements
    if (index === 0) {
      if (arr.indexOf(element, index + 1) === -1) { //first element
        return true
      } else {
        return false
      }
    } else if (index === arr.length - 1) { //last element
      if (arr.lastIndexOf(element, index - 1) === -1) {
        return true
      } else {
        return false
      }
    }
    
    //all middle elements are handled below
    if (arr.indexOf(element, index + 1) === -1 && arr.lastIndexOf(element, index - 1) === -1) {
      return true
    } else {
      return false
    }
  })
  
  //the resulting array should contain only one element, the unique number, which we return
  return unique[0]
}
