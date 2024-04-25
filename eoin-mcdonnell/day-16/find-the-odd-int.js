//find a number that is odd so divisiable by 2 with a remainder 
// rather find the number of times the number is present in the array
//map 
/*-
function findOdd(A) {
  //happy coding!
  let arr = []
  for (let odd in A){
    if (odd % 2 != 0){
         arr.push[odd] 
    }
    console.log(odd)
  }
  return 0;
}

function findOdd(A) {
  //happy coding!
let acc = 0
A.forEach((i) => acc++)
  console.log(acc)
}-*/
function findOdd(A) {
    let count = 0;
    let arr = A.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count % 2 !== 0) {
        return arr[i];
      }
    }
  }