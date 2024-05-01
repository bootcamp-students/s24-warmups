/*Precept
Parameters- Take a string of dashed words and cameCase them. Only cap if already capped in
original string.
Return- Return a string that is camelCased and capitalized if required.
Example- "the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
Concerns- Capitalizing only strings that already have a capital. .replace or .replaceAll?
Explain- start by replacing all - with _ then split the string by _. if the string is empty
return an empty string. loop over array, starting with the second letter of the array so 
the first letter stays the same. we then upper case the first letter of the each word after a _.
then slice the rest of the word onto it. we then return the the array and join it into one string.

Positive self talk-
Translate-
*/

function toCamelCase(str){
    let split = str.replaceAll('-', '_').split('_');
  console.log(split);
    if (split.length === 1){
      return split[0];
    }
    
    for (let i = 1; i < split.length; i++){
  console.log(split);
        split[i] = split[i][0].toUpperCase() + split[i].slice(1);
      } // spit[i][0] = first letter + split[i].slice(1) = rest of word. w/ out slice we only
    // return the first letters capitalized. 
  
    return split.join('');
  }
  
  