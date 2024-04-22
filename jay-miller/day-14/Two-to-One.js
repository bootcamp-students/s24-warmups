function longest(s1, s2) {
  "use strict"
  //2 strings
  //return a new sorted string
  //Return 1 long string showing each letter once
  //Create Arrays a and b containing unique values by making
  //them Set and converting them back to array.
  let a = [... new Set(s1.split(""))];
  let b = [... new Set(s2.split(""))];
  
  //combine both arrays into one
    for (let i=0; i<b.length; i++){
  	a.push(b[i]);
  }
  
  //create a new array from new combination
  //create a unique array from the combination
  let isCombo = [... new Set(a)];
  //sort array and join to form a string
  let combo = isCombo.sort().join("");
  //Return the final result
  return combo;
