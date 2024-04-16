function getElement(array, indexes) 

{
 //let something = array
let currentIndex = array
for (const index of indexes) {
  currentIndex = currentIndex[index];
}
 return currentIndex;// returns currentIndex
}
