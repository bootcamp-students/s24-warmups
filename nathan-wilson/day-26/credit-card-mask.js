function maskify(cc) {
  let finalString = '';
  let newArray = [];
  let hashAmount = Math.max(0, cc.length - 4);
  cc.split('').forEach((i) => {
    newArray.push(i);
  });
  console.log(hashAmount);
  finalString += '#'.repeat(hashAmount);
  for (let i = hashAmount; i < newArray.length; i++) {
    finalString += newArray[i];
  }
  return finalString;
}

// A string of digits

// return a string of hashes except the last 4 digits

// '4556364607935616', '############5616'

// I could have a type error because theyre strings, I could not handle edge cases of short
// string correctly

// I can do this!
