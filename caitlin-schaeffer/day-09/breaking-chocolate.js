/*
Task: Your task is to split the chocolate bar of given dimension n x m into small squares.
Params: n & m (both integers/irreal measurements of chocolate)
Return: the number of breaks to make it 1
Example:  (breakChocolate(5, 5) , 24)
Concerns: 1,1 returns 0 because you can't break it down 
Ideas: I think we could just divide by 1? or more so we need to minus 1 and return how many times that happens
Explain:

Given Function: 
function breakChocolate(n,m) {
  return 0;
}
*/

// you're counting (returning) the *number of breaks* 

function breakChocolate(n,m) {
    let answer = 0  
  if (m > 0 && n >0) {
    answer = ((n * m) -1)
    } else (m <= 0 && n <= 0); {
      answer = 0
    }
     return answer;
   }
