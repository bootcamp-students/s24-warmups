/*precept
parameters- take scores and filter them by grade
return- return the amount of scores for each grade
example- countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
concerns- have done similar kata
explain- set the grade count to 0 for each grade. then take the score and for each one
add them to a specific gradecount. return the grade count.


*/

function countGrade(scores){
    let gradeCount = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
      
      scores.forEach((score => {
        if (score === 100){
          gradeCount.S++;
        } else if (
        score <100 && score >= 90){
          gradeCount.A++
        } else if (
        score <90 && score >= 80){
          gradeCount.B++
        } else if (
        score <80 && score >= 60){
          gradeCount.C++
        } else if (
        score <60 && score >= 0){
          gradeCount.D++
        } else if (
        score === -1){
          gradeCount.X++
        }
      }))
      return gradeCount;
    }