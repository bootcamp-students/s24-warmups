function findShort(s){
  const length = s.split (" ").map(word => word.length);
  
  const smallestLength = Math.min(...length);
  
  return smallestLength
}

  
  
  //use .min method
  // use .length 
// create const for length
// use (s).split
// create const for smallestLength
// return smallestLength
// 
