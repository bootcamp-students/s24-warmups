function countGrade(scores) {
  const obj = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }
  scores.filter(v => {
    if (v >= 100) { obj[`S`]++ }
    if (v >= 90 && v < 100) { obj[`A`]++ }
    if (v >= 80 && v < 90) { obj[`B`]++ }
    if (v >= 60 && v < 80) { obj[`C`]++ }
    if (v >= 0 && v < 60) { obj[`D`]++ }
    if (v < 0) { obj[`X`]++ }
  })
  return obj
}
/*
  Ember's Feedback:
  - File name wrong
  - This is an anti-pattern, don't write code like this.
  - The point of this kata was to learn how to use .filter so this
    isn't achieving that.
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
