function between(a, b) {
  let finalArray = [];
  for (let i = a; i <= b; i++) {
    finalArray.push(i);
  }
  return finalArray;
}

// P a and b are both integers a being less than b
// R expects an array
// E 1 and 4 will return [1, 2, 3, 4]
// C I could not properly loop through the array and get an incorrect return array.
// could also switch a and b on accident
// E initiate an empty array variable. Make a loop that loops through b amount of times, starting at 1.
// For each iteration push the current value to the empty array. Then return that array.
// I'm confident that I can do this
