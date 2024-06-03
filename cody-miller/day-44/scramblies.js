function scramble(str1, str2) {
  console.log("Inputs: ", str1, str2);

  let string1 = str1.split("");
  console.log("string1: ", string1);

  let string2 = str2.split("");
  console.log("string2: ", string2);

  let doesContain = string2.every((letter) => string1.includes(letter));
  console.log("doesContain: ", doesContain);

  if (doesContain) {
    return true;
  } else {
    return false;
  }
}

// Does str1 include str2?
// Break apart str2
// See if it is in str1
// Else, return false
