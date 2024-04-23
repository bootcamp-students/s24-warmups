
function createPhoneNumber(numbers){
  console.log('numbers', numbers);
  
  let firstPart = "(";
  let secondPart = ") ";
  let thirdPart = "-"; 
  let phone = '' ;
  
  for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}]`, numbers[i]);
    if (i < 3) {
      console.log(firstPart.concat(numbers[i].toString()))
    } else if (i >= 3 && i < 6) {
      secondPart.concat(numbers[i].toString());
    } else (i >= 6) {
      thirdPart.concat(numbers[i].toString());
    } return `${firstPart} ${secondPart} ${thirdPart}`;
  }
    

//P create a function that accepts an array of ten integers 0-9, that returns a strinf of those in a phone number
//R my function should return a 10 digit phone number
//Example ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// concerns there aren't 10 integers or there are numbers not between 0 and 9. 
//Explain, create 3 parts of the numbers in an array and join them together after sepearting them with the concat method
  
  
