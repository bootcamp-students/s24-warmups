/* P - cc(string), four, i, array
    R - masked CC (string)

    four = slice cc(-4)
    lewt i == cc.length -4
    let array =[]
    for loop --> push "#" to array i times
    push four to array
    return joined array 
    */

function maskify(cc) {
    let four = cc.slice(-4);
    let i = cc.length - 4;
    let array = [];
    for (i; i > 0; i--) {
      array.push("#")
    }
    array.push(four)
    return array.join("");
  }
  