// Return data for minimum number of breaks
// if statement

function breakChocolate(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  return n * m - 1;
}
/*
  Ember's Feedback:
  - Great job!
  - Get in the habit of always using triple equal, it helps prevent bugs
*/
