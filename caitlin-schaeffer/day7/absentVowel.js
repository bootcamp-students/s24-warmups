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
Solutions: 

Given Code:
function absentVowel(x){

}
*/

// I want to write a code that runs through every single letter of a given sentence and returns if something is missing
// If this doesn't work, just make an if else running through every single vowel 

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










/*
Broken code: 


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