//parameters - filter method
//return - object of grades results
//example - countGrade([65,75,,85,85,95,100,100])
//should return {S:2, A:1, B:2, C:2, D:0, X:0}
//concerns
//explain -
//positive talk
//translate

function countGrade(scores) {
  const gradeRanges = [
    { grade: 'S', minScore: 100, maxScore: 100 },
    { grade: 'A', minScore: 90, maxScore: 99 },
    { grade: 'B', minScore: 80, maxScore: 89 },
    { grade: 'C', minScore: 60, maxScore: 79 },
    { grade: 'D', minScore: 0, maxScore: 59 },
    { grade: 'X', minScore: -1, maxScore: -1 }
  ];

  const gradeCounts = {};

  gradeRanges.forEach(({ grade }) => {
    const count = scores.filter(score =>
      score >= gradeRanges.find(gr => gr.grade === grade).minScore &&
      score <= gradeRanges.find(gr => gr.grade === grade).maxScore
    ).length;

    gradeCounts[grade] = count;
  });

  return gradeCounts;
}
/*
  Ember's Feedback:
  - Good job!
  - Really awesome code :)
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
