/* precept
parameters- take a string of numbers and change the all but the last 4 to a #
return- a sting of numbers with all but the last 4 changed to #.
example- (maskify('4556364607935616'), '############5616');
concerns- this one wasnt too bad and i hadnt looked at it until we saw maddies example
explain- if the length of the string less than 4 then we return it as is. 
split the string, loop over everything but the last 4 of the array, change everything but the
last 4 to #. Then we join it together. 
*/

// return masked string
function maskify(cc) {
  
    if (cc.length < 4){
      return cc;
    }
    let split = cc.split('')
    
    for (let i = 0; i < split.length - 4; i++) {
      split [i] = '#';
      }
    return split.join('');
  }