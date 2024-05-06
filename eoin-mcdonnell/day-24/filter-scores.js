//use else if statments

function countGrade(scores){
    const objectScores = {S:0, A:0, B:0, C:0, D:0, X:0};
    scores.filter(x=>{
      if (x === 100){
        objectScores.S++;
      }else if (x < 100 && x >= 90){
        objectScores.A++;
      }else if (x < 90 && x >= 80){
        objectScores.B++;
      }else if (x < 80 && x >= 60){
        objectScores.C++;
      }else if (x < 60 && x >= 0){
        objectScores.D++;
      }else if (x < 0){
        objectScores.X++;
      }
    })
    return objectScores;
    }