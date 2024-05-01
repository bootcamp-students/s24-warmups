//parameters - positive integers 1 - 3999
//return - string containing roman numeral of a number 
//example - 1 -->       "I"
//concern - never done a kata like this before.  Not sure how to approach it and 
//could use wrong methods or get sidetracked. 
//explain - I want to be able to create a function that takes 1-3999 as integer
//and returns roman numerals for the number.  

function solution(num){
  const map = {
                  M: 1000,
                  CM: 900,
                  D: 500,
                  CD: 400,
                  C: 100,
                  XC: 90,
                  L: 50,
                  XL: 40,
                  X: 10,
                  IX: 9,
                  V: 5,
                  IV: 4,
                  I: 1,
              }
    let result = ''
  
    for (key in map) {
    const repeatCounter = Math.floor(num / map[key]);

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    num %= map[key];

    if (num === 0) return result;
  }

  return result;
};

 
    
