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
Note: If the number is between 900 and 1000, it is the 1 unit minus the 10 unit, if the number is between 500 and 900, it is the 5 unit plus the 1 unit
Solution: basically just needed to add all of the numerals that can't be easily added up and assign their values then adjust the result with the keys

Given Code:
function solution(number){
  // convert the number to a roman numeral
}


*/

//Adding more consts to address the weird numbers (like 4 and 90 that aren't easily added up by the numerals)

const numerals = {
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
    I: 1
};

function solution(number) {
    // this is a guard line that produces a message if the number is less than 1 or greater than 399
    if (number < 1 || number > 3999) {
        return "Number out of range";
    }
    //this makes sure the result is a string
    let result = '';

    //this loop iterates through the numerals (object above) and constructs the Roman numeral representation from those options
    for (let key in numerals) {
        while (number >= numerals[key]) {
            result += key;
            number -= numerals[key];
        }
    }

    return result;
}

/*
    Ember's Feedback:
    - You did so well!!!
*/
// Alternative Solution
function solution(number) {
    if (number < 1 || number > 3999) {
        return "Number out of range (1-3999)";
    }

    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = '';

    for (const numeral of romanNumerals) {
        while (number >= numeral.value) {
            result += numeral.numeral;
            number -= numeral.value;
        }
    }

    return result;
}


/*
This code was so close but it was getting so long and unruly and I was losing track of where I had fixed it and where I hadn't
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
    if (vCount <= 3) {
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
*/

/*
This was Embers Code:
function solution(number) {
    // convert the number to a roman numeral
    let numTotal = number;
    let numeralsReturn = "";

    // thousands logic
    let thousands = Math.floor(number / 1_000);
    // let thousandsRemainder =
    numeralsReturn += "M".repeat(thousands);
    numTotal -= thousands * 1_000;

    // 500s logic
    let fiveHundredRemainder = numTotal % 500
    let fiveHundreds = Math.floor(numTotal / 500);
    if (fiveHundreds > 0 && fiveHundredRemainder >= 400) {
        numeralsReturn += 'CM'
        numTotal -= 900
    } else {
        numeralsReturn += "D".repeat(fiveHundreds);
        numTotal -= fiveHundreds * 500
    }

    // 100s logic
    let oneHundreds = Math.floor(numTotal / 100);
    if (oneHundreds > 3) {
        numeralsReturn += 'CD'
    } else {
        numeralsReturn += "C".repeat(oneHundreds);
    }
    numTotal -= oneHundreds * 100;

    // 50s logic
    let fiftiesRemainder = numTotal % 50;
    let fifties = Math.floor(numTotal / 50);
    if (fifties > 0 && fiftiesRemainder >= 40) {
        numeralsReturn += 'XC'
        numTotal -= 90;
    } else {
        numeralsReturn += "L".repeat(fifties);
        numTotal -= fifties * 50;
    }

    // 10s logic
    let tens = Math.floor(numTotal / 10);
    if (tens > 3) {
        numeralsReturn += 'XL'
    } else {
        numeralsReturn += "X".repeat(tens);
    }
    numTotal -= tens * 10;

    // 5s logic
    let fivesRemainder = numTotal % 5;
    let fives = Math.floor(numTotal / 5);
    if (fives > 0 && fivesRemainder > 3) {
        numeralsReturn += 'IX'
        numTotal -= 9;
    } else {
        numeralsReturn += "V".repeat(fives);
        numTotal -= fives * 5;
    }

    // 1s
    let ones = Math.floor(numTotal / 1);
    if (ones === 4) {
        numeralsReturn += 'IV'
    } else {
        numeralsReturn += "I".repeat(ones);
    }

    return numeralsReturn;
}
*/
