function toCamelCase(str){
//Use .split()
str = str.split("")
// Return str then map over it using el and i
  return str.map(function(el, i) {
    // If el = _ or -
    // el = str i +1 .toUpperCase();
    if (el === "_" || el === "-"){
      el = str[i + 1].toUpperCase();
      // .Splice the str by 1
      str.splice(i+1, 1);
    }
    // Return el
    return el;
    // Use .join to add el
  }).join("");
}
