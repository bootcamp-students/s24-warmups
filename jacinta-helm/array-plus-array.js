function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((acc, cur) => {
    return (acc += cur);
  });
  let sum2 = arr2.reduce((acc, cur) => {
    return (acc += cur);
  });
  //   Returm the sum
  return sum1 + sum2;
}

        
                      
 // for ( let value of bothArray ){
 //   returnValue += value
 //  
  //for  ( let counter = 0; counter< arr1.length; counter++){
 //return returnValue += arr1[counter]; 



/* The term Plus will join the two arrays. 
Declare and define both arrays.
We want to find the sum, the two arrays whould equal to. 

PRECEPTS
-params -aar1, arr2 they are arrays
-return the number 
-example - [1,2], [3,4] => 10
*/
