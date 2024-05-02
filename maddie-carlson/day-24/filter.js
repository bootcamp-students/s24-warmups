function countGrade(scores){
  //function takes an array of scores and returns the grade distribution
  //return value should be in the form of an object
  
  let object = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  }
  
  //to solve, use filter to grab smaller arrays
  object.S = scores.filter((score) => score === 100).length
  object.A = scores.filter((score) => score < 100 && score >= 90).length
  object.B = scores.filter((score) => score < 90 && score >= 80).length
  object.C = scores.filter((score) => score < 80 && score >= 60).length
  object.D = scores.filter((score) => score < 60 && score >= 0).length
  object.X = scores.filter((score) => score < 0).length
  
  return object
}
