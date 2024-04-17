function filter_list(l) {
  //function takes an array of numbers and string
  //needs to return a new array with the strings filtered out
  
  //to solve, use the filter array method and typeof to sift out the strings and return the new array
  return l.filter((test) => typeof test == "number")
}
