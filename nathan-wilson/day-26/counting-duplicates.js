function duplicateCount(text) {
  let newString = text.toLowerCase();
  let alreadyChecked = [];
  let counter = 0;
  for (char of newString) {
    if (
      newString.indexOf(char) !== newString.lastIndexOf(char) &&
      !alreadyChecked.includes(char)
    ) {
      alreadyChecked.push(char);
      counter++;
    }
  }
  return counter;
}

// a string with captial and lowercase letters and integers

// return the amount of numbers and letters that occur more than once

// "aabBcde", 2

// I could not consider captial letters/lowercase together, I could not consider integers
// I could have a type error

// Take the text, split into an array, convert it all to lowercase.
// check if current number/letter is the same as the previous. If so dont add it to the
// final array

// I can do this!
