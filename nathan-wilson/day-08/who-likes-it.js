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
