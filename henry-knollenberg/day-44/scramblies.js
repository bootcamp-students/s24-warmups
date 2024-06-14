/*str2, str1, arr2, arr1, obj
return true or false

  split strings - arr1, arr2
  create object with keys corresponding to arr2, +1 to each
  iterate over arr1, for each letter that matches arr2, find key in object and -1
  iterate over object, if any value is greater than 0 return false, else true
  
*/

function scramble(str1, str2) {
    let arr2 = str2.split("")
    let arr1 = str1.split("")
    let obj = {}
    
    arr2.forEach((a) => {
      if (obj[a]) {
        obj[a]++
      } else {
        obj[a] = 1
      }
    })
    
    arr1.forEach((b) => {
      if (obj[b]) {
        obj[b]--
      } else {
        obj[b] = 0
      }
    })
             
    for (const c in obj) {
      if (obj[c] > 0) {
        return false
      }
    }
    
    return true
    
  }