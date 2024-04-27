//strings
//return value should be strings 
//should be able to use the .filter method
//wrong method
//I want to filter the strings and return a new string with numbers filtered out.


'use strict';
  
function filter_list(l) {
  
  let numbers = l.filter((e) => typeof e === 'number');
  return numbers
}
