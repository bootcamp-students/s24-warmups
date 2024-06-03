// Wet, procedural
function solution(number) {
    // convert the number to a roman numeral
    let numTotal = number;
    let numeralsReturn = "";

    // thousands logic
    let thousands = Math.floor(number / 1_000);
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
/*
    PRECEPT
    Params - number
    Return - string
    Example - 22 => 'XXII'
    Concerns - none
    Explain -
        I have a list of Roman numerals and their associated numeric value.
        I want to determine how many of each numeral are within the input number,
        starting from the largest numeral M and working my way down.
        If the number is between 1 and
        If the number is between 900 and 1000, it is the 1 unit minus the 10 unit
        If the number is between 500 and 900, is the the 5 unit plus the 1 unit
        1, 10s, 100s idea; recursive log10 of total?
*/

// Helper funtion approach
let romanNumeralFromNumberDescending = (total, numeral, numeralTotal) => {
  let funcNum = total;
  let funcString = '';
  while (funcNum >= numeralTotal) {
    funcNum -= numeralTotal;
    funcString += numeral
  }
  return [funcNum, funcString]
}

function solution(number) {
  let holdNum = number;
  let returnString = "";
  let romanNumerals = {
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
  }

  for (const numeral in romanNumerals) {
    const numeralTotal = romanNumerals[numeral];
    const [tempNum, tempString] = romanNumeralFromNumberDescending(holdNum, numeral, numeralTotal);
    holdNum = tempNum;
    returnString += tempString;
  }
  
  return returnString;
}

// another approach
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

    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            number -= romanNumerals[i].value;
        }
    }

    return result;
}
