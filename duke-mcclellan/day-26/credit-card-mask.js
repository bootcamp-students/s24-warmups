//parameters - 
//return - last four with ####
//example - "4556364607935616" --> "############5616"
//concern - wrong syntax
//explain - I want to iterate over the string and sub out the last for numbers
//with a #
  function maskify(str) {
  // If the string length is less than or equal to 4, return the original string
  if (str.length <= 4) {
    return str;
  }

  // Extract the last four characters
  let lastFour = str.substr(-4);
  
  // Replace all characters except the last four with '#'
  let masked = '#'.repeat(str.length - 4) + lastFour;
  
  return masked;

}
