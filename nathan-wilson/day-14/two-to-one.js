function longest(s1, s2) {
  let combinedSortedString = (s1 + s2).split('').sort();
  return combinedSortedString.reduce((a, c) => {
    return a.includes(c) ? a : a + c;
  }, '');
}

// Two distinc strings, no spaces, all lowercase

// return the same type of string containing each letter in the alphabet
// included between both strings in alphabetical order

// "aretheyhere", "yestheyarehere"), "aehrsty"

// I could not filter out duplicates, I could not have it sorted in alphabetical order

// combine both strings, sort them in alphabetical order, loop over the string
// putting the previous letter in a variable, compare the current to the previous.
// If they are the same dont add it to the result string if they arent then add it

// I can do this!
