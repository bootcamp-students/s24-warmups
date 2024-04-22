function filter_list(l) {
  'use strict'
 
   const nums = l.filter((x) => typeof x === "number");
  return nums
}

/*
simple enough. i need to filter out strings of a given array. 
i need to use .filter and typeof to filter
*/
