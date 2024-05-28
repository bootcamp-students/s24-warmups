/* P-array
    R-object

    numberS = scores.filter((score)) => score === 100).length --> through numberX
    return object of score counts */


function countGrade(scores) {
    let numberS = scores.filter((score) => score === 100).length
    let numberA = scores.filter((score) => score >= 90 && score < 100).length
    let numberB = scores.filter((score) => score >= 80 && score < 90).length
    let numberC = scores.filter((score) => score >= 60 && score < 80).length
    let numberD = scores.filter((score) => score >= 0 && score < 60).length
    let numberX = scores.filter((score) => score === -1).length

    return { "S": numberS, "A": numberA, "B": numberB, "C": numberC, "D": numberD, "X": numberX }

}

/*
  Ember's Feedback:
  - Great job!!
  - Awesome use of filter :D
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
