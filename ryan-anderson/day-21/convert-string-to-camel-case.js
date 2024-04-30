function toCamelCase(str){
    if (str === '') {
      return ""
    }
  let newStr = (str.replaceAll(/[^a-zA-Z0-9]/g, ' ')).split(' ')
  
  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join('')
  }
  
  // if input is empty string, return empty string back
  // replace non-letter characters with spaces
  // keep first letter in same case
  // if a letter comes after a space, capitalize it