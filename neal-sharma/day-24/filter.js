/*precept
parameters- take scores and filter them by grade
return- return the amount of scores for each grade
example- countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
concerns- if scores is not an array, my code will error
explain- set the grade count to 0 for each grade. then take the score and for each one
add them to a specific gradecount. return the grade count.
*/

function countGrade(scores) {
  let gradeCount = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

  scores.forEach(score => {
    if (score === 100) {
      gradeCount.S++;
    } else if (
      score < 100 && score >= 90) {
      gradeCount.A++
    } else if (
      score < 90 && score >= 80) {
      gradeCount.B++
    } else if (
      score < 80 && score >= 60) {
      gradeCount.C++
    } else if (
      score < 60 && score >= 0) {
      gradeCount.D++
    } else if (
      score === -1) {
      gradeCount.X++
    }
  })
  return gradeCount;
}
/*
  Ember's Feedback:
  - Great job!!
  - that is the proper use of .forEach, you use it when you want a side effect to happen
  - the purpose of this kata was to get you familiar with .filter though :P
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
