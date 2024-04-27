function createPhoneNumber(numbers){
  // Make format = xxx-xxx-xxx
  let format = "(xxx) xxx-xxxx";
  // Lopp through a for if using .length
  // Using .replace after to replace 'x' with numbers[i]
  for (let i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i])
  }
  // Return format to get (123) 456-7890
  return format;
}
