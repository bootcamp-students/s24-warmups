function century(year) {
  let n;
  n = year / 100
  return Math.ceil(n);
}

/*
P: i have century function that gives me a year, i need to
return the century.

R: we need to return an int.

E: i have 1705. i need to return 18. im going to use division
and Math.ceil to round up and return

C: can I get rid of the 2nd half of integers?

E: i divided the year by 100, math.ceil to round up, assigned
the result to a variable and returned it.

P: I know this, its a matter of breaking it down.

T: this is simple math.
*/

/*
  Ember's Feedback:
  - Same feedback in this one about naming variables more explicitly
  - The concerns section for this would be "if year is not a number, this function will return NaN" -
    because NaN "pollutes" all mathematical operations, that would cause issues elsewhere. That doesn't mean you necessarily need to
    add defaulting behavior, but it is something to be aware of.
*/

// Alternative solution
function century(year) {
  if(isNaN(year)) return null;
  return Math.ceil(year/100);
}
