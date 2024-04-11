function getElement(array, indexes) {
    let returnIndex = 0;
      for (let i = 0; i < indexes.length; i++) {
      returnIndex = indexes[i];
      array = array[returnIndex];
    }
    return array
      }
    //find specified element in array
    //isolate it (or delete rest of array)
    //for loop to build array of indexes