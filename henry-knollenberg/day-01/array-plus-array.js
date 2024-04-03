/* paramas - arr1, arr 2
   return number
   example - [1,2], [3,4] => 10 */

   function arrayPlusArray(arr1, arr2) {
    let bothArray = arr1.concat(arr2);
    let returnValue = 0;
    for (let value of bothArray) {
      returnValue += value;
    }
    return returnValue;
  }