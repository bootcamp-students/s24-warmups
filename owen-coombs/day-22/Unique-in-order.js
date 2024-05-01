var uniqueInOrder=function(iterable){
  
  const newArray = [];
    
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      newArray.push(iterable[i]);
    }
  }
    return newArray
}

// create new var for empty arrasy
// create for loop iteraiting over our parameter 
// will return newArray
// most psudocode is on paper
