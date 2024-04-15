function between(a, b) {
  // parameters a and b which are integers
  // return will be an array 
  // example if (a = 1; b = 4) => [1,2,3,4]
  // making sure that input is actually a number 
  // including starting at a and including it going to b and including it
  let myArray = []
  
  for(let i = a; i <= b; i++) {
    myArray.push(i)
  }
  return myArray 
}
