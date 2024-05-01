var uniqueInOrder=function(iterable){
    if(iterable.length < 2) {
      return iterable.split('')
    } else {
      let unique = [iterable[0]];
      for (let i = 1; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i-1]) {
        unique.push(iterable[i])
        }
        }
      
  // My initial attempt included everything below, before I realized I needed to use push
  // instead of += to keep unique as an array
      
  //     }
  //   if (unique.length < 2) {
  //     return unique 
  //   } else if (typeof iterable[0] === 'number') {
  //       console.log(unique)
  //       return (unique.split('')).map(num => num.toNumber())
  //   } else {
  //    return unique.split('')
  //     }
  //   }
      
      return unique
    }
    }
  
  // for loop over array
  // add character to new array if it does not equal character before it