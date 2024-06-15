function maskify(cc) {
    if (cc.length <= 4) {
      return cc;
    }
    
    const lastFour = cc.slice(-4);
    const maskedPart = '#'.repeat(cc.length -4);
    
    const maskedString = maskedPart + lastFour;
    return maskedString;
      
}
// Parameter- I need to create a function that can maskify the digits, and only show the last four digits.
// Return- my function should return only 4 digits shown in a sequence of numbers. 
// Examples- 4556364607935616'), '############5616; 11111'), '#1111,
// Concerns- the string doesn't have more than 4 digits, or i could use the wrong method for this problem.
// Explain- check if the string length is less than or equal to 4. get the last four of the string. create a masked part of the 
// the string minus the last 4 digits. then combine the masked part with the last four