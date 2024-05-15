function countGrade(scores) {
  let SCount = scores.filter(score => score == 100).length;
  let ACount = scores.filter(score => score < 100 && score >= 90).length;
  let BCount = scores.filter(score => score < 90 && score >= 80).length;
  let CCount = scores.filter(score => score < 80 && score >= 60).length;
  let DCount = scores.filter(score => score < 60 && score >= 0).length;
  let XCount = scores.filter(score => score < 0).length;

  return { S: SCount, A: ACount, B: BCount, C: CCount, D: DCount, X: XCount }
}

//filter array for each score

/*
  Ember's Feedback:
  - Hey great job!
  - You could be more specific in your pseudocode
*/
// Alternative Solution
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
