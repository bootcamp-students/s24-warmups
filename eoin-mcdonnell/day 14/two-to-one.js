//use strict
//if there is two si and s2
//we need to split and sory s1 s2 into two seperate arrays
//join arrays with concat
//split new array then sort
//concat into a new string and then remove duplicates
//

function longest(s1, s2) {
    // your code
    let newStr = s1.concat(s2)
    console.log(newStr)
    let newArr = newStr.split("")
    newArr.sort()
    console.log(newArr)
    let filterArr = newArr.filter(function(item, pos) {
      return newArr.indexOf(item) == pos;
  })
    console.log(filterArr)
    let filterStr = filterArr.join("")
    console.log(filterStr)
    return filterStr
  }