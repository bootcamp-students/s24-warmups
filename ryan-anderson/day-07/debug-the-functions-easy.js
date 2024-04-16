function multi(arr) {
    let multi1 = 1;
    for (i = 0; i < arr.length; i++) {
    multi1 *= arr[i];
    }
  return multi1; 
  }
  function add(arr) {
    let add1 = 0;
    for (i = 0; i < arr.length; i++) {
    add1 += arr[i];
    }
  return add1; 
  }
  function reverse(str) {
    let reverse1 = str.length - 1;
    let str1 = [];
    for (i = 0; i <= reverse1; i++) {
      str1 += str[reverse1 - i];
      }
    return str1;
  }