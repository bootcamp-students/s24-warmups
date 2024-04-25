function spinWords(string){
    let newArray = string.split(' ')
    
    let reverseArray = newArray.map(s => {
      let sArray = s.split('')
      if (s.length > 4) {
       return sArray = (sArray.reverse()).join('');
      } else {
       return sArray = sArray.join('');
      }
    })
    return reverseArray .join(' ')
  }
  
  //split at spaces
  //reverse entries with length > 4