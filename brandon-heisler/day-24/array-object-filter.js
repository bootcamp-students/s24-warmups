function countGrade(scores){
  "use strict"
  var scoreObj = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0
  }
  scores.filter(x => {
    if (x == 100){
      scoreObj.S++
    }else if (x < 100 && x >= 90){
      scoreObj.A++
    }else if (x < 90 && x >= 80){
      scoreObj.B++
    }else if (x < 80 && x >= 60){
      scoreObj.C++
    }else if (x < 60 && x >= 0){
      scoreObj.D++
    }else{
      scoreObj.X++
    }
  })
  console.log(scoreObj)
  return scoreObj
