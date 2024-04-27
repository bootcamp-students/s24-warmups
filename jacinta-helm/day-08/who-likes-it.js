function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length == 4) {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}

// P make a function that will create an array containing the names of people that like an item.
// R I could use the Switch method or if else loop.
// E (['Peter']), 'peter likes this'; (['jacob', 'alex']), 'Jacob and Alex like this'
// C i could get the wrong answer by not using a correct function or not understanding the question at all.
// E would be if the array of the statement is equal to a number then it will display "no one likes this"... else if it is displaying more than 0. it will take the placesments of the array and add them together.

/*
  Ember's Feedback:
  - Great job!
*/
// Alternative solution
function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}
