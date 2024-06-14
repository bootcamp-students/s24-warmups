function countGrade(scores){

  const S = scores.filter(score => score === 100).length;
  const A = scores.filter((score) => score < 100 && score >= 90).length;
  const B = scores.filter((score) => score < 90 && score >= 80).length;
  const C = scores.filter((score) => score < 80 && score >= 60).length;
  const D = scores.filter((score) => score < 60 && score >= 0).length;
  const X = scores.filter((score) => score === -1).length;

  const grades = {
      "S": S,
      "A": A,
      "B": B,
      "C": C,
      "D": D,
      "X": X
  };
  return grades;
}
