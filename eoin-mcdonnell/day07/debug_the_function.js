// itterate through the array add to the result
// sam for add 
function multi(arr) {
    let result = 1;
    
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i]
    }
    
    return result;
  }
  
  function add(arr) {
    
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    
    return result;
  }
  
  
  //split into an array, reverse arracy, join 
  function reverse(str) {
    let arr = str.split("")
    arr = arr.reverse()
    str = arr.join("")
    
    return str;
  }