/* trim by " ",
replace multiple spaces with just one
split string by " ",
iterate through array
    decode each letter into new array
join array
return */


decodeMorse = function(morseCode){
    let trimStr = morseCode.trim(" ");
    let arr = trimStr.split(" ");
    let decodedArr = arr.map((el) => {
      if (el !== "") {
        return MORSE_CODE[`${el}`];
      } else {
        return " ";
      }
    })
    let formatStr = decodedStr.replaceAll("  ", " ");
    return formatStr;
  }