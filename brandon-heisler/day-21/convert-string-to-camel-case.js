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
/*
  Ember's Feedback:
  - Great jbo!! :D
  - excellent work using splice to get rid of the character index, which then
    means the current index is the letter you want to uppercase. Really cool
    solution!
*/
// Alternative Solutions
/* Regex here gets either a - or a _ and the thing after it, replacing it with
    what you return from the function you give to .replace.
    The function you gave to .replace ignores the whole match, which is the 1st parameter.
    Instead you get the 1st capture group and uppercase it.
    The capture group being the parentheses, which is the thing directly after the - or _
*/
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
function toCamelCase(str) {
  let camelCased = ''
  let uppercaseNext = false
  for (const character of str) {
    if (character === '-' || character === '_') {
      uppercaseNext = true
    } else {
      if (uppercaseNext) {
        camelCased += character.toUpperCase()
        uppercaseNext = false
      } else {
        camelCased += character
      }
    }
  }
  return camelCased
}
