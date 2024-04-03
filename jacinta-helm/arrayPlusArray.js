function arrayPlusArray(arr1, arr2) {
  let both = arr1.concat(arr2);
  // [1, 2, 3, 4, 5, 6,]
  let sum1 = arr1.reduce((acc, cur) =>{
    return acc += cur;
  let sum2 = arr2.reduce((acc, cur) =>{
    return acc += cur;
  return (sum1, sum2); 
  }
        
                      
 // for ( let value of bothArray ){
 //   returnValue += value
 // }
