function countGrade(scores){
    console.log(scores);
    let grades = [
      {
        letter: 'S',
        score: 'x = 100'
      },
      {
        letter: 'A',
        score: '100 > x >= 90',
      },
      {
        letter: 'B',
        score: '90 > x >= 80',
      },
      {
        letter: 'C',
        score: '80 > x >= 60',
      },
      {
        letter: 'D',
        score: '60 > x >= 0',
      },
      {
        letter: 'X',
        score:'x = -1',
      },
    ]
    console.log(grades)
    
    let filteredGrades = grades.filter(grade => {
        let condition = grade.score.replace('x', score);
        return eval(condition);
    });
    return filteredGrades.map(grade => grade.letter)
 
  }
