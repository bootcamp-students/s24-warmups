function createPhoneNumber(numbers){
  const areaCode = numbers.slice(0,3).join('');
  const firstPart = numbers.slice(3,6).join('');
  const secondPart = numbers.slice(6,10).join('');
  
    return '('+ areaCode + ')'+ ' ' + firstPart + '-'+ secondPart
  
}

// will use .join
// create vars for areacode,firstpart,secondpart
// use .slice to grab numbers
//use .join to combine
// slice to grag numbers up to what i set the second number to 
