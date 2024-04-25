//numes in the array before the 0
// after you find the 0 in the array stop iterating
// add the remaining figures
// you have an array
// you have a list of items in the array
// one of the items is a 0
// add all the numbers before 0
// split array at 0
// create a new array and 
/*-
function houseNumbersSum(inputArray) {
  //coding and coding..
  let newArr = []                         )
  if(let i = 0; i < inputArray; i++){
    if (inputArray[i] === 0)
  }
}
-*/

/*-
function houseNumbersSum(inputArr) {
  let newArr=[];
  for(let i=0;i<inputArr.length;i++)
  if (inputArr[i]===0){
    newArr.push(newArr.splice(0,i));break}
    console.log(newArr)
  return newArr.map(v=>v.reduce((a,b)=>a+b,0))*1;
}

-*/
function houseNumbersSum(arr) {
    let Max=[];
    for(let i=0;i<arr.length;i++)
    if (arr[i]===0){Max.push(arr.splice(0,i));break}
    return Max.map(v=>v.reduce((a,b)=>a+b,0))*1;
  }
    
  