/*
Instructions: Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count
the grade distribution of the scores, to return an object
Example: countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
Params: given a number array
Return: an object
Solution: name a filter after each letter grade to return the grades as true or false, set the grades.length as the value to a letter grade key

Given Code:
function countGrade(scores){
  //coding here...

}
*/

function countGrade(scores) {
  let sGrade = scores.filter((grade) => {
    if (grade === 100) {
      return true
    }
  })

  let aGrade = scores.filter((grade) => {
    if (grade < 100 && grade >= 90) {
      return true
    }
  })

  let bGrade = scores.filter((grade) => {
    if (grade < 90 && grade >= 80) {
      return true
    }
  })

  let cGrade = scores.filter((grade) => {
    if (grade < 80 && grade >= 60) {
      return true
    }
  })

  let dGrade = scores.filter((grade) => {
    if (grade < 60 && grade >= 0) {
      return true
    }
  })

  let xGrade = scores.filter((grade) => {
    if (grade === -1) {
      return true
    }
  })
  let S = sGrade.length
  let A = aGrade.length
  let B = bGrade.length
  let C = cGrade.length
  let D = dGrade.length
  let X = xGrade.length

  let grades = { S, A, B, C, D, X }

  return grades
}
/*
  Ember's Feedback:
  - Great job! :D
  - Awesome us of .filter! :)
*/
// Alternative Solutions
function countGrade(scores) {
  let filterScores = (high, low) => scores.filter(score => score < high && score >= low).length
  return {
    S: filterScores(101, 100),
    A: filterScores(100, 90),
    B: filterScores(90, 80),
    C: filterScores(80, 60),
    D: filterScores(60, 0),
    X: filterScores(0, -1),
  }
}
function countGrade(scores) {
  let returnObject = {};
  let gradeBounds = {
    // [lower bound, upper bound]
    S: [100, Infinity],
    A: [90, 99],
    B: [80, 89],
    C: [60, 79],
    D: [0, 59],
    X: [-Infinity, -1]
  }

  // this function does not rely on closure of the scores variable, so you can easily move it without effecting it
  function countGradesInBounds(scoresArray, lowerBound, upperBound) {
    return scoresArray.filter(score => score >= lowerBound && score <= upperBound).length;
  }

  for (const grade in gradeBounds) {
    returnObject[grade] = countGradesInBounds(scores, ...gradeBounds[grade]);
  }

  return returnObject;
}
