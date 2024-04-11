function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// Takes an array of names

// Expects a string that says if no one liked it who liked it and if more than 3 it just shows 2 and then the amount
// left likes it

// likes(['Peter']), 'Peter likes this'

// I couild incorrectly handle the array, i could return an incorrect string as well.

// I will take the names array and do a switch case that depending on the amount of people itll return the correct
// string

let nArray = n.toString().split('');
let finalNumberArray = [];
let largerNumberArray = [];
for (let k = 0; k < nArray.length; k++) {
  for (let i = k; i < nArray.length; i++) {
    for (let j = nArray.length - 1; j >= 0; j--) {
      if (nArray[i] < nArray[j]) {
        largerNumberArray.push(nArray[j]);
        console.log(nArray[j]);
      }
    }
    console.log(largerNumberArray);
    if (largerNumberArray.length != 0) {
      let numberToReplaceWith = largerNumberArray.sort()[0];
      console.log(numberToReplaceWith);
      let indexOfNumber = nArray.indexOf(numberToReplaceWith);
      console.log(indexOfNumber);
      nArray[indexOfNumber] = nArray[i];
      console.log(nArray);
      nArray[i] = numberToReplaceWith;
      finalNumberArray.push(Number(nArray.join('')));
      largerNumberArray = [];
      console.log(nArray);
    }
  }
}
finalNumberArray = finalNumberArray.sort();
if (finalNumberArray[0] === n) {
  finalNumberArray.shift();
}
console.log(finalNumberArray);
return finalNumberArray[0];
