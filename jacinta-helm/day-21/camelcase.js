function toCamelCase(str) {
    let words = str.split('');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === '_' || words[i] === '-') {
        // Remove underscore or dash and capitalize the next letter
        words.splice(i, 1);
        if (i < words.length) {
          words[i] = words[i].toUpperCase();
        }
      }
    }
  
    // Join the words back together and return
    return words.join('');
  }
  
  //P create a function that converts dashes/underscores to camel case.
  //R my function should return a string with no dashes or underscores. 
  //E "the_stealth_warrior"), "theStealthWarrior"
  //C my string doesnt have any dashes or underscores. 
  //Explain. I need to get rid of the dashes by replacing the underscores and dashes with a space.
  //If the word in the index is equal to a dash or underscore, then i will remove it with the splice method .
  //Then capitalize the word in that array as a capital letter. 
