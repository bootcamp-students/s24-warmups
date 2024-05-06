
oldmcdonnell
// check if the string starts with a capital letter
// letters after the underscore or dash are capitalized
//precepts property str
// requirements change letter case and return without dashes or underscores
// seperate function for capitalize
// 
/*-
function toCamelCase(str){
  let strArray;
  
  if (str === ""){
    return "";
  }
  
  if (str.indexOf('-') !== -1){
      strArray = str.split('-')
    } else {
      strArray = str.split('_')
    }
  
  let ccString = strArray[0];
  
  for (let i = 1; i < strArray.length; i++){
    ccString +=  capitalize(strArray[i]);
  }
  console.log(ccString)
  return ccString;
}


let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}
-*/
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
Best Practices0Clever0
 0ForkCompare with your solutionLink
leonidGovorec
function toCamelCase(str){
    return str?str.split(/[-_]/).map((item,index)=>index>0?item.replace(item[0],item[0].toUpperCase()):item).join(""):""
}
Best Practices0Clever0
 0ForkCompare with your solutionLink
RandomAssMonkey
function toCamelCase(str){
    // Split the string by dash or underscore
    const words = str.split(/[-_]/);

    // Capitalize each word starting from the second word
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back together
    return words.join('');
}


console.log('Sorry this was Mr. ChatGpt!')
Best Practices0Clever0
 0ForkCompare with your solutionLink
evanpasaribu
const { assert } = require('chai');
function toCamelCase(str) {
  let words = str.split(/[_-]/);
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}


describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});
Best Practices0Clever0
 0ForkCompare with your solutionLink
leulune
function toCamelCase(str){
    const word = str.split('_').join('-').split('-');
    const result = [];
        for (let i = 1; i < word.length; i++ ) {
            const zero = word[i].split('');
            //console.log(zero)
            const first = zero[0].toUpperCase();
            const second = zero.splice(1, `${zero.length}`);
            //console.log(second)
            const words = [first + second.join('')].join('');
            const resultWords = result.push(words);
            //console.log(resultWords);
        }; 

    function answer() {
        const end = word[0]+result.join('')
        return end;
    }

   const resultFromEnd = answer();
   return resultFromEnd;
};
Best Practices0Clever0
 0ForkCompare with your solutionLink
KumarG23
// check if the string starts with a capital letter
// letters after the underscore or dash are capitalized
//precepts property str
// requirements change letter case and return without dashes or underscores
// seperate function for capitalize
// 

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