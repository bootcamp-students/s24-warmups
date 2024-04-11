function getElement(array, indexes) {
  let multiArray = array;
  for (const index of indexes) {
    multiArray = multiArray[index];
  } return multiArray;
} 

/*
You have to take the param indexes, which is an array, 
take that value as a multidimensional location.
 ex. [0,1] = [0][1].
Then you have you plug that into the array param.
*/