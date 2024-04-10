function century(year) {
  // Isolate hundreds and thousands digits
  // convert from string to number if needed
  // add 1
  // return result
  let centuryFromYear = 0;
  if (year % 100 === 0) {
    centuryFromYear = (year / 100);
  } else {
    centuryFromYear = ((year - (year % 100)) / 100) + 1;
  }
  return centuryFromYear
}

/*
  Ember's Feedback:
  - Great job!
  - Kind of a circuitous solution but I like it :D
  - I will post an alternative solution, compare and contrast the two.
*/
// Alternate solution
function century(year) {
  return Math.ceil(year / 100)
}
