/*
Instructions: 
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter 
and returning a string containing the Roman Numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the
leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical 
symbols in a row.
Examples: 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
1666 --> "MDCLXVI"
Params: given integer
Return: string value of integer
Solution: 

Given Code:
function solution(number){
  // convert the number to a roman numeral
}


*/


// logic is almost done on i!!!

const numerals = {
    I: 1, V: 5, X:10, L: 50, C: 100, D: 500, M: 1000
}

function solution(number){
    //counting M
    let mCount = Math.floor(number/1000);
    let totalMinusM = number % 1000;
    //returning letter M
    if (mCount > 0) {
        mCount = 'M'.repeat(mCount)
    } else if (mCount > 3) {
        false
    } else if (mCount === 0) {
       mCount = ""
    }
  console.log(mCount)
    //counting D
    let dCount = Math.floor(totalMinusM/500);
    let totalMinusD = totalMinusM % 500;
     //returning letter D
     if (dCount > 0) {
        dCount = 'D'.repeat(dCount)
    } else if (dCount > 3) {
        false 
    } else if (dCount === 0) {
        dCount = ""
    }
    //counting C
    let cCount = Math.floor(totalMinusD/100);
    let totalMinusC = totalMinusD % 100;
     //returning letter C
     if (cCount > 0) {
        cCount = 'C'.repeat(cCount)
    } else if (cCount > 3) {
        false
    } else if (cCount === 0) {
        cCount = ""
    }
     //counting L
    let lCount = Math.floor(totalMinusC/50);
    let totalMinusL = totalMinusC % 50;
     //returning letter L
     if (lCount > 0) {
        lCount = 'L'.repeat(mCount)
    } else if (lCount > 3) {
        false 
    } else if (lCount === 0) {
        lCount = ""
    }
      //counting X
    let xCount = Math.floor(totalMinusL/10);
    let totalMinusX = totalMinusL % 10;
     //returning letter X
     if (xCount > 0) {
        xCount = 'X'.repeat(xCount)
    } else if (xCount > 3) {
        false 
    } else if (xCount === 0) {
        xCount = ""
    }
     //counting V
     let vCount = Math.floor(totalMinusX/5);
     let totalMinusV = totalMinusX % 5;
      //returning letter V
    if (vCount > 0) {
        vCount = 'V'.repeat(vCount)
    } else if (vCount > 3) {
        false
    } else if (vCount === 0) {
        vCount = ""
    }
      //counting I
    let iCount = Math.floor(totalMinusV/1);
    let totalMinusI = totalMinusV % 1;
     //returning letter I
     if (iCount <= 3) {
        iCount = 'I'.repeat(iCount)
    } else if (iCount >= 4) {
        iCount = 'IV'
    } else if (iCount === 0) {
        iCount = ""
    } 
  console.log(iCount)
    
    
    while (number > 0) {
        number = number - numerals.m
  }
  return mCount + dCount + cCount + lCount + xCount + vCount + iCount

}