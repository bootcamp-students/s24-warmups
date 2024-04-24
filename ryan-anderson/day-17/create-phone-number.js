function createPhoneNumber(numbers){
    let numStr = numbers.map(num => num.toString())
    return '(' + numStr[0] + numStr[1] + numStr[2]  + ') ' + numStr[3] + numStr[4] + numStr[5] + '-' + numStr[6] + numStr[7] + numStr[8] + numStr[9]
  }
  // turn numbers into string(s)
  // return phone number string