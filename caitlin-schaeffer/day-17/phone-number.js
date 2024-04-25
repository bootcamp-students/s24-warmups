/*
Instructions: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of 
those numbers in the form of a phone number.
Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
or
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
Params: given an array of integers 
Return: Must return "(123) 456-7890", must return it in that format with spaces 
Solution: returning an array of strings 

Given Code: 
function createPhoneNumber(numbers){
  
}
*/

// Basically you need to randomize (or not randomize) just take an array of integers into a string 

function createPhoneNumber(numbers){
  console.log(numbers[8]) 
return '(' + numbers[0] + numbers[1] + numbers[2] + ')' + ' ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9] +''
}

/* 
Thank you for Ember for reminding me how to access the index of the array
*/