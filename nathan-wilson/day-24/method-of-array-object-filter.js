function countGrade(scores) {
  let S, A, B, C, D, X;
  S = scores.filter((score) => {
    return score === 100;
  });
  A = scores.filter((score) => {
    return score < 100 && score >= 90;
  });
  B = scores.filter((score) => {
    return score < 90 && score >= 80;
  });
  C = scores.filter((score) => {
    return score < 80 && score >= 60;
  });
  D = scores.filter((score) => {
    return score < 60 && score >= 0;
  });
  X = scores.filter((score) => {
    return score === -1;
  });
  return {
    S: S.length,
    A: A.length,
    B: B.length,
    C: C.length,
    D: D.length,
    X: X.length,
  };
}

// an array of numbers

// return an object that groups the numbers by grades

// ([50,60,70,80,90,100]) , {S:1, A:1, B:1, C:2, D:1, X:0}

// I could return the wrong data type, I could make it very inneficient

// Take the scores, map through them and filter the correct ones into the right key value paes
