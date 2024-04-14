function getSum (a,b) {
    
    let smallNum = a < b ? a : b
    
    let bigNum = a > b ? a : b
    
    let answer = 0
    for (let i = smallNum; i <= bigNum; i = i++){
      console.log("i : ", i)
      
      answer = answer + i 
      
    }
    return answer 
  }
