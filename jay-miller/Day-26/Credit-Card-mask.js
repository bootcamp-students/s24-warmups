// return masked string
function maskify(cc) {
  "use strict"
  // Make a format variable
  let format = "";

  for (let i = 0; i < cc.length; i++) {

    if (i < cc.length - 4) {
      format += "#";
    } else {
      format += cc[i];
    }
  }

  return format;
}
