//Parameter-.map
//return-new array with amounts doubled
//example- let newArray = array.map(x) => x * 2
//concerns- none
//explain- we use the map function to examine each element of the array
//we add x => x * 2 to multiply each element by two and return the new array. 

function double(array) {
  const newArray = array.map(x => x * 2)
  return newArray
  
}
