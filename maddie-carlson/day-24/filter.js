function countGrade(scores) {
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
/*
  Ember's Feedback:
  - Good job!
  - Excellent use of filter :D
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
