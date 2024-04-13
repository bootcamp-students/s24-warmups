var makeEveryLetterAfterXCaps = function (str, letter) {
  let letterArray = str.split('');

  for (let i = 0; i < letterArray.length-1; i++){
    if (letter === letterArray[i]){
      letterArray[i+1] = letterArray[i+1].toUpperCase();
    }
  }
  return letterArray.join('');
}


/*
i want to make the provided string into an array, 
i want to compare each index of the array to the provided letter, if theres a match then 
we modify the array, after modification, make the array a strring and return it.
*/ 
