/* P-array
    R-object

    numberS = scores.filter((score)) => score === 100).length --> through numberX
    return object of score counts */


function countGrade(scores){
    let numberS = scores.filter((score) => score === 100).length
    let numberA = scores.filter((score) => score >= 90 && score < 100).length
    let numberB = scores.filter((score) => score >= 80 && score < 90).length
    let numberC = scores.filter((score) => score >= 60 && score < 80).length
    let numberD = scores.filter((score) => score >= 0 && score < 60).length
    let numberX = scores.filter((score) => score === -1).length
    
    return {"S": numberS, "A": numberA, "B": numberB, "C": numberC, "D": numberD, "X": numberX}
    
  }