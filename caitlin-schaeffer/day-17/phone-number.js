/*
Instructions: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of 
those numbers in the form of a phone number.
Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
or
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
Params: given an array of integers 
Return: Must return "(123) 456-7890", must return it in that format with spaces 
Solution: 

Given Code: 
function createPhoneNumber(numbers){
  
}
*/

// Basically you need to randomize (or not randomize) just take an array of integers into a string 

// this didnt work
function createPhoneNumber(numbers){
    function createPhoneNumber(numbers){
      let number = '(' + arr[0] + arr[1] + arr[2] +"'" + ")" + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] +''
      console.log(number)
      return number 
  }
  }

/* Ember says:
'('+ arr[0] + arr[1] + arr[2]+') ' + 
*/