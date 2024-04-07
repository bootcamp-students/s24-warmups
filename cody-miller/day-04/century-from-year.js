function century(year) {
  let centennial = year / 100;
  centennial = Math.ceil(centennial);
  return centennial;
}
// i should equal 1, probably not 0
// There has to be some kind of equality. >= or <=
// Maybe not. Rounding up would capture the upper year of the century.
// Maybe us truncation to chop off 2 zeros to return number of year.
// Takes year as parameter of function
// If you divide by 100, you end up with a decimal. If you round up, you get the century.

/* Ember's Feedback:
    I think centennial means anniversary :P
    Great job and great pseudocode!
*/
// Alternative solution
function centuryFromYear(year) {
  if (year < 0) {
    return 0
  }
  return Math.ceil(year / 100)
}
