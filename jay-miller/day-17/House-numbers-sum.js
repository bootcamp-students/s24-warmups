function houseNumbersSum(arr) {
 // Make a new Array
  let Max=[];
  // For if loop using .length
  for(let i=0;i<arr.length;i++)
    // using .push
  if (arr[i]===0){Max.push(arr.splice(0,i));break}
  // using .map and .reduce
  return Max.map(v=>v.reduce((a,b)=>a+b,0))*1;
}
