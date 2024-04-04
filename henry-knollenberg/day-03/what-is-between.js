/* a
  b
  a<b
  i <= b
  i = a
  i++
  push i to array*/



  function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) {
      array.push(i);
    } 
    return array;
  }