/*
Instructions: Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count 
the grade distribution of the scores, to return an object
Example: countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
Params: given a number array
Return: an object 
Solution: name a filter after each letter grade to return the grades as true or false, set the grades.length as the value to a letter grade key

Given Code: 
function countGrade(scores){
  //coding here...
  
}
*/

function countGrade(scores){
  let sGrade = scores.filter((grade) => {
   if (grade === 100) {
     return true
   } })
  
  let aGrade = scores.filter((grade) => {
   if (grade < 100 && grade >= 90) {
     return true
   }})
    
   let bGrade = scores.filter((grade) => {
     if (grade < 90 && grade >= 80) {
     return true
   }})
   
   let cGrade = scores.filter((grade) => {
     if(grade < 80 && grade >= 60) {
     return true
   }})
   
   let dGrade = scores.filter((grade) => {
     if (grade < 60 && grade >= 0) {
     return true
   }})
 
   let xGrade = scores.filter((grade) => {
     if (grade === -1) {
     return true
   }})
   let S = sGrade.length
   let A = aGrade.length
   let B = bGrade.length
   let C = cGrade.length
   let D = dGrade.length
   let X = xGrade.length
   
   let grades = {S, A, B, C, D, X}

   return grades 
 }

