/* P- string, lastValue
   R- array
   
   split string into array
   iterate through array (filter)
    is e === lastValue?
      if so, return false
      if not,
        set lastValue, return true
   return filtered array 
*/

var uniqueInOrder=function(iterable){
    let lastValue;
    let arr = [];
    if (typeof iterable === "string") {
      arr = iterable.split("");
    } else if (Array.isArray(iterable)) {
      arr = iterable;
    }
    return arr.filter((e) => {
      if (e === lastValue) {
        return false;
      } else {
        lastValue = e;
        return true;
      }
    })
  }