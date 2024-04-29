//parameters-accepts an array of 10 integers
//returns a string in the form of a phone number
//([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//incorrect syntax of method
//Should be able to slice numbers into parts and join together using template literal `${}`


function createPhoneNumber(numbers){

    let areaCode = numbers.slice(0, 3).join('');
    let mainNumbers1 = numbers.slice(3, 6).join('')
    let mainNumbers2 = numbers.slice(6, 10).join('')
    let fullNumber = `(${areaCode}) ${mainNumbers1}-${mainNumbers2}`
    return fullNumber;
   
}
