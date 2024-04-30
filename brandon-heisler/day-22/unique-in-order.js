var uniqueInOrder=function(iterable){
  "use strict"
  let newArray;
  if (Array.isArray(iterable)){
    newArray = iterable
  }else{
    newArray = iterable.split("") 
  }
//   let sortArray = newArray.sort()
  
//   function removeDupes(newArray){
    return newArray.filter((item, index)=> (item) !== newArray[index-1])
//     console.log("log", newArray)
//   }
//   return removeDupes(newArray)
}
