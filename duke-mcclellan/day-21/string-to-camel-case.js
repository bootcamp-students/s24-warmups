//parameters- 
//should return a string using camel case 
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//capitalizing every word instead of camel case due to wrong method
//I want to be able to take every string regardless of their format 
//and split them map over each word/index and join them back 
//together and camel case every word after the first one.


function toCamelCase(str){
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return (
      word.charAt(0).toUpperCase() + word.slice(1)
        );
  })
  .join('')
}
