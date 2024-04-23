function createPhoneNumber(numbers){
  //function takes an array of 10 integers between 0 and 9
  //returns a string of those numbers in the form of a phone number
  
  //to solve, simply put the first three numbers in (), then a dash between the next set of three and four numbers
  //can do this by using an index to track our progress 
  //return the result when done
  let string = "("
  
  for (let i = 0; i < numbers.length; i++) {
    //track our formatting
    if (i === 3) {
      string += ") " //closed parenthesis
    } else if (i === 6) {
      string += "-" //dash
    }
    
    string += String(numbers[i])
  }
  
  return string
}
