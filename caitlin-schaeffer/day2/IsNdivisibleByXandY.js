/*
Params: Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero numbers.
Return value: should return true or false
Exmaple: n = 10; x = 5; y = 2; true (10 is divisible by both x and y)
Ideas: I think a good code could be something that checks if the product 
of n/x and n/y is a decimal. If it's a decimal return false, if it isn't it's true
*/


function isDivisible(n, x, y) {
    let XisWholeNumber = Number.isInteger((n/x))
    let YisWholeNumber = Number.isInteger((n/y))
    return (XisWholeNumber &&  YisWholeNumber)
  }
  
  // two &'s mean 'and'; || means 'or'

/*
Old code: 

function isDivisible(n, x, y) {
    Number.isInteger() 
    if (true) {Number.isInteger((n/x), (n/y));}
    
    else (false);}
  }



function isDivisible(n, x, y) {
    if (true) {(n/x), (n/y) = whole number;}
    
    else (false) {(n/x) = decimal; (n/y) = decimal;}
  }
*/
