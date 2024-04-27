function longest(s1, s2) {
//   console.log('s1, s2', s1, s2);
  let combinedString = s1 + s2;
//     console.log('combinedString', combinedString);
  let finalString = combinedString.split('').sort().reduce((acc, char) => {
    if (acc === '' || char !== acc.slice(-1)) {
      acc += char;
    }
    return acc;
  })
  return finalString;
  }

//   const finalString = firstString.reduce((acc, cur) => {acc , cur
//     console.log()
//     console.log('acc , cur', acc, cur)
//   const longest = myArray2.reduce((acc, cur) => {acc, cur
//     console.log('acc, cur', acc, cur)
                                                        
                                                        


//P i need to create a function that takes 2 strings and includes only letters once from a-z, 
//R my function should return one string that includes letters a-z showing each letter once.
//Example a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"
//C there are no double letters in the array.
//Explain I combined the two arrays to get a new array. I split the array to get each letter by itself so it'll be easier to 
// remove repeated letters. sort the string to put them in order and reduce it. use slice to check if the previous character is the same as the
//as the next one either gets rid of it or continues on to the next character 
