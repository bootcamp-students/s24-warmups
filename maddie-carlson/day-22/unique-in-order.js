var uniqueInOrder=function(iterable){
  //function takes a var that could be either an array OR a string
  //needs to return an array without any identical values next to each other, otherwise in the order that they came in

  //first check our types
  if (typeof iterable == "string") {
    iterable = iterable.split("") // get an array
  }

  //and check if the array is empty
  if (iterable.length == 0) {
    return [] //empty array case
  }

  //to solve, first make a new array and a counter to track our location in that array
  //then, loop over our first array, adding any unique, non-adjacent elements to our new one
  let new_array = []
  let j = 0
  new_array.push(iterable[0]) //push the first element, always
  
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != new_array[j]) {
      new_array.push(iterable[i])
      j++ //second counter
    }
  }

  //then return
  return new_array
}
