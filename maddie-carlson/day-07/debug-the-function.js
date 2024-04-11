function multi(arr) {
  //needs to return the multiplication of all items in the array
  //this can be accomplished by looping and storing the result after each op
  
  let result = 1;
  
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  
  return result;
}

function add(arr) {
  //needs to return the sum of the items in the array
  //this can be accomplished by looping and storing the result after each op, as above
  
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  
  return result;
}

function reverse(str) {
  //needs to reverse the string
  //this can be accomplished by splitting it into an array with a blank string,
  //using the reverse() array function,
  //and then joining the array back into a string with a blank string
  
  let arr = str.split("")
  arr = arr.reverse()
  str = arr.join("")
  
  return str;
}
