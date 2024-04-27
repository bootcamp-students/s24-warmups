/* Split into an array by " "
  iterate through array,
    if length is greater than 5, then reverse
  return new array
  join the new array by " "
  return the new string 
  */

  function spinWords(string){
    let array = string.split(" ");
    let reversedArray = array.map((x) => {
      if (x.length >= 5) {
        let splitX = x.split("");
        let reversedX = splitX.reverse();
        return reversedX.join("");
      } else {
        return x
      }
    })
    return reversedArray.join(" ");
  }