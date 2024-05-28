function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }



  // Slice the string from the beginning to the length minus 4 and replace all characters in this slice with '#'