function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }

  else if (names.length === 1) {
    return `${names[0]} likes this`;
  }

  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }

  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }

  else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

}

/*
were given an array of names. we need to make a function that adds
the names in the given array to a string of text.
we should have a couple strings.
1. if no name, no one likes this
2. if 1 name (name) likes this
3. if 2 or 3 (name, name, name) likes this.
4. if 4+ (first two names) and (#'s') others like this.

we want to return a str.

i can use string literal template to fill in the blanks

*/
/*
  Ember's Feedback:
  - Great work!
  - Excellent pseudo code and execution
*/
// Alternative Solution
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
