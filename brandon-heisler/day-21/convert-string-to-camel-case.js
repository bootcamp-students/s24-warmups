function toCamelCase(str){
  const strArray = str.split('')
  for (let i = 0; i < strArray.length; i++){
    if (strArray[i] === "_" || strArray[i] === "-"){
      strArray.splice(i, 1);
      strArray[i] = strArray[i].toUpperCase()
    }
  }
  return strArray.join('')
}
/*
first i need to make the str into an array,
then i need to loop over it and check for "-" or "_"
if the loop encounters a _ or - then splice it and make that index uppercase.
then returned a joined array
*/
