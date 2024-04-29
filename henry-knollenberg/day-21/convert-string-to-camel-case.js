/* 
split string by "-" and "_"
iterate through array
    for each index (except first), charAT(0) - capitalize
join the new, return 
*/


function toCamelCase(str){
    let arr = str.split(/(?:-|_)+/)
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newStr = arr.join("");
    return newStr;
  }
