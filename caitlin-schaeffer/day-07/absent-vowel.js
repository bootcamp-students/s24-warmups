/*
Params: Your job is to figure out the index of which vowel is missing from a given string:
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one.
Also, you won't need to worry about capitals.
Return: a vowel
Solutions: run a for loop to check if vowel is in the string

Given Code:
function absentVowel(x){

}
*/

// I want to write a code that runs through every single letter of a given sentence and returns if something is missing
// If this doesn't work, just make an if else running through every single vowel
// some comments left by Ember in explanation
// you can rename stuff in their given code!

function absentVowel(inputString) {
  // array of vowels I will search for
  // I want to return a number associated with each vowel,
  // the number is associated with the vowels index in this array
  const vowels = ['a','e','i', 'o', 'u'];

  // I will iterate over my vowels array to search my input string for each vowel
  // took out the 'i' & 'j'
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {

    let found = false;
    let currentVowel = vowels[vowelsIndex];

    // I will iterate over the input string to search for the current vowel
    for (let inputStringIndex = 0; inputStringIndex < inputString.length; inputStringIndex++) {

      let currentCharacter = inputString[inputStringIndex]

      if (currentVowel === currentCharacter) {
        found = true;
        // break out of this for loop if I found the vowel
        break;
      }
    }

    // If I did not find the current vowel in the input string,
    // I will return the index number of the missing vowel
    if (!found) {
      return vowelsIndex;
    }
  }
}

/*
  Ember's Feedback:
  - Good job!
  - put the old code into a notes.js file
*/
// Alternate solution
function absentVowel(x) {
    return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}









/*
Broken code/pre-used code:

function absentVowel(x){
    let absentVowel = [];
      const vowels = [];
      vowels[0] = 'a';
      vowels[1] = 'e';
      vowels[2] = 'i';
      vowels[3] = 'o';
      vowels[4] = 'u';
//all I need to do is get these vowel indexes to return a number!
      for (let i = 0; i < vowels.length; i ++) {
          let found = false;
          for (let j = 0; j < absentVowel.length; j ++) {
              if (vowels[i] === absentVowel[j]) {
                  found = true;
                  break;
              }
          }
          if (!found) {
              x = vowels[i];
              break;
          }
      }
      return x;
      }

function absentVowel(x){
    const vowels = [];
    vowels[0] = 'a';
    vowels[1] = 'e';
    vowels[2] = 'i';
    vowels[3] = 'o';
    vowels[4] = 'u';
    for (let i = 0; i < vowels.length; i ++) {
        let found = false;
        for (let j = 0; j < x.length; j ++) {
            if (vowels[i] === x[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            x = vowels[i];
            break;
        }
    }
    return x;
    }

function absentVowel(x){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    vowels.indexOf(vowels)
}

function absentVowel(x){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let absentVowel = x;
    for (let i =0; i < vowels.length; i ++) {
        let found = false;
        for (let j = 0; j < x.length; j ++) {
            if (vowels[i] === x[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            x = vowels[i];
            break;
        }
    }
    return absentVowel;
    }

    */
