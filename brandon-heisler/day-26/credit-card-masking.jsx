// return masked string
function maskify(cc) {
  let ccArray = cc.split('')
  for (let i = 0; i < ccArray.length-4; i++){
    ccArray[i] = "#" 
  }
  return ccArray.join('')
  }
  

/*
i need to take an input which seems to be a string and make all characters
but the last 4 into #
strings are immutable so i think itll be easiest to change this into an array
then i want to loop over each index unless i < array.length -4
after that, ill join them together and return it
*/
