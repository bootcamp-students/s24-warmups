/* 
  SPLICE -> O, O, "("
            4, 0, ")"
            5, 0, " "
            9, 0, "-"
            
  Join the array into a string.
  */

  function createPhoneNumber(numbers){
    numbers.splice(0, 0, "(");
    numbers.splice(4, 0, ")");
    numbers.splice(5, 0, " ");
    numbers.splice(9, 0, "-");
    
    return numbers.join("");
  }