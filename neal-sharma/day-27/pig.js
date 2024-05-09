
/*
parameters- move the first letter of each word to the end and add ay to the end as well
return- the string with the letters moved for pig latin.
example- pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
concerns- not sure how to go about it yet. Will most likely need google
explain- split string into words, loop over them starting at the first index instead of 0,
for each word we remove the first letter and add it to the end with ay. we make this equal to 
split[i]. then we return split by joining back together as words. added regex for exclamations etc.
*/

function pigIt(str){
  let split = str.split(' ');
  
  
  for (let i = 0; i < split.length; i++){
    if (/^[a-zA-Z]+$/.test(split[i]))
  split[i] = split[i].slice(1) + split[i][0] + 'ay';
  } console.log(split);
  return split.join(' ')
}