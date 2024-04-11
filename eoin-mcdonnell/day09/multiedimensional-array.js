function getElement(array, indexes) {
    // good luck
  
  let idx = indexes
  let arr = array
  for (let i = 0; i < idx.length; i++){  
    //arr = array[indexes[i]]
    arr = arr[indexes[i]]
    console.log(arr[indexes[i]])
  }
  return arr
  }
  
  //access items of the inner array
  
  /*-
  
  // This loop is for outer array
  for (let i = 0, l1 = salary.length; i < l1; i++) {
  
      // This loop is for inner-arrays
      for (let j = 0, l2 = salary[i].length; j < l2; j++) {
  
          // Accessing each elements of inner-array
          documents.write( salary[i][j] ); 
      }
  }
  
  //
  parameter array - array - 
            index - ordered number
  return - Any  an elemnt from a multidimensional array param
  example = > 
  c
  
  -*/
  