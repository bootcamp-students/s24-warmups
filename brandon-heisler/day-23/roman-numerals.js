function solution(number){
  "use strict"
  const romanNumerals = {
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
  
  let result = ""
  
  for (let key in romanNumerals){
    while (number >= romanNumerals[key]){
      result += key
      number -= romanNumerals[key]
    }
  }
  return result
}
/*
im given a number between 1 and 3999
i need to return the roman numerals for the given number.
i can set up an object and add all the numerals and their numbers as key value
pairs
set a result as empty string
go over each key value pair with the number, add the right key,
subtract from the number down to zero and return it
