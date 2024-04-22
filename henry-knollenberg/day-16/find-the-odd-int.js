/* P = array, int of array, object, keys of object, properties of object
R = odd-appearing-times int (property of object)

Create object.
Iterate through array.
  Check if key exists for each number.
    If so, add 1 to property
    If no, create key, add 1 to property
For-in loop through object
  if object[property] % 2 === 0, then return object[property] 
*/

function findOdd(A) {
    let objectOfIntegers = {};
  
    A.forEach((key) => {
      if (objectOfIntegers.hasOwnProperty( `${key}`)) {
        objectOfIntegers[`${key}`] = objectOfIntegers[`${key}`] + 1;
      } else {
        objectOfIntegers[`${key}`] = 1;
      }
    })
    
    for (const key in objectOfIntegers) {
      if (objectOfIntegers[`${key}`] % 2 !== 0) {
        return parseInt(key);
      }
    }
    ;
  }