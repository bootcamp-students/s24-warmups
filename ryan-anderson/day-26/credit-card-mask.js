// return masked string
function maskify(cc) {
    let newCC = cc;
    for (let i = 0; i < cc.length-4; i++) {
      newCC = newCC.replace(newCC[i], '#')
    }
    return newCC
  }
  
  //for loop to replace each character with '#'