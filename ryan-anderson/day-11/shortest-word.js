'use strict'
function findShort(s){
  s = s.split(' ');
  let lengths = [];
  for (let i = 0; i < s.length; i++) {
    lengths[i] = (s[i].length);
  }
  return Math.min(...lengths)
}

//use split to create array of words
//use .length to create array of word lengths
//return min of length array