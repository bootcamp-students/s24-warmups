function countGrade(scores){
  const obj={S:0,A:0,B:0,C:0,D:0,X:0}
  scores.filter(v=>{
  if(v>=100){obj[`S`]++}
  if(v>=90&&v<100){obj[`A`]++}
  if(v>=80&&v<90){obj[`B`]++}
  if(v>=60&&v<80){obj[`C`]++}
  if(v>=0&&v<60){obj[`D`]++}
  if(v<0){obj[`X`]++}
  })
  return obj
}
