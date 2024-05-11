function countGrade(scores) {
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
    if (x == 100) {
      scoreObj.S++
    } else if (x < 100 && x >= 90) {
      scoreObj.A++
    } else if (x < 90 && x >= 80) {
      scoreObj.B++
    } else if (x < 80 && x >= 60) {
      scoreObj.C++
    } else if (x < 60 && x >= 0) {
      scoreObj.D++
    } else {
      scoreObj.X++
    }
  })
  return scoreObj
}
/*
  Ember's Feedback:
  - The way you are using filter here is an anti-pattern. You are using it the -
    way you would use .forEach, in that you want to do a side effect for every -
    element in the array. Considering the intent of this kata was for you to -
    familiarize yourself with the .filter method, this is a fail from me boss :(
  - Filter is meant to be giving a "testing" function and elements that fail the test -
    are filtered out. Failing the test function means you return the value false from -
    the test function.
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
