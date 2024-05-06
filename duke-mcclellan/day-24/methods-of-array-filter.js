//parameters - filter method
//return - object of grades results
//example - countGrade([65,75,,85,85,95,100,100]) 
//should return {S:2, A:1, B:2, C:2, D:0, X:0}
//concerns
//explain - 
//positive talk
//translate

function countGrade(scores){
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
