// Solution 1 - replacement function for the replaceAll method
function toCamelCase(str){
  return str.replaceAll(/[-_](.)/g, (match, p1) => p1.toUpperCase());
}

// Solution 2 - iterate the string and build up new string
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
