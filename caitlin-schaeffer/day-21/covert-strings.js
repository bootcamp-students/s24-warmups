/*
Instructions: Complete the method/function so that it converts dash/underscore delimited words 
into camel casing. The first word within the output should be capitalized only if the original 
word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
Examples: "the-stealth-warrior" gets converted to "theStealthWarrior"
Params: given string
Return: joined string
Solution: guard clause for blanks, then split the string based on dashes and return uppercase joined

Given Code: 
function toCamelCase(str){

}
*/
function toCamelCase(str){
    console.log("original value:", str)
      if(str === ''){
          return ''
      }
      let newString = str.split(/(?:-|_)+/) 
      console.log("splitString:", newString)
    // up to this point the string removes dashes and lower dash
     newString.map((words) => {
       words.chartAt(0).toUpperCase() + words.slice(1);
     })
     newString.join("");
     return newString
  }


/*
They're using RegExp: which is used for matching text with a pattern
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Henry: 
let arr = str.split(/(?:-|_) +/)
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let newStr = arr.join("";
return newStr)
}

Ember: 
function toCamelCase(str){
return str.replaceAll(/[-_](.)/g, (match, p1) => p1.toUpperCase());
}
*/

// let noDash = newString.map((words) => {
//     if (words !=== "-" || words !=== "_") {
//         return words.split("").join("")
//     } else if (words === "-" || words === "_") {
//         //remove 
//     }


