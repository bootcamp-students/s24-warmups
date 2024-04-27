//get the numbers format 
//replate the number x with number
//return the format

function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx"; 
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }