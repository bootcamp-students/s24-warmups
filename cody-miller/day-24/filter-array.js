function countGrade(scores){

    const S = scores.filter(score => score === 100).length;
    const A = scores.filter((score) => score < 100 && score >= 90).length;
    const B = scores.filter((score) => score < 90 && score >= 80).length;
    const C = scores.filter((score) => score < 80 && score >= 60).length;
    const D = scores.filter((score) => score < 60 && score >= 0).length;
    const X = scores.filter((score) => score === -1).length;

    const gradeDistribution = {
        "S": S,
        "A": A,
        "B": B,
        "C": C,
        "D": D,
        "X": X
    };
    return gradeDistribution;
}
// We are given an array of grades that needs to be filtered into an object
// We need an equation and/or if/else statement that will handle the sorting conditions
// We then need to open up the array and convert them into key-value pairs

// Just kidding. The answer was simpler. Just filter the conditions and get the length
// of the new array. Then just create an object yourself. Easy peasy.

/*
    Ember's Feedback:
    - Make this a js file please!
    - Good job!
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
